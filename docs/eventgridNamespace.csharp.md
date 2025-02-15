# `eventgridNamespace` Submodule <a name="`eventgridNamespace` Submodule" id="@cdktf/provider-azurerm.eventgridNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridNamespace <a name="EventgridNamespace" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace azurerm_eventgrid_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespace(Construct Scope, string Id, EventgridNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig">EventgridNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig">EventgridNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration">PutTopicSpacesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTopicSpacesConfiguration">ResetTopicSpacesConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity"></a>

```csharp
private void PutIdentity(EventgridNamespaceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule"></a>

```csharp
private void PutInboundIpRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(EventgridNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a>

---

##### `PutTopicSpacesConfiguration` <a name="PutTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration"></a>

```csharp
private void PutTopicSpacesConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetInboundIpRule"></a>

```csharp
private void ResetInboundIpRule()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetPublicNetworkAccess"></a>

```csharp
private void ResetPublicNetworkAccess()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopicSpacesConfiguration` <a name="ResetTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTopicSpacesConfiguration"></a>

```csharp
private void ResetTopicSpacesConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventgridNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventgridNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference">EventgridNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList">EventgridNamespaceInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference">EventgridNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfiguration">TopicSpacesConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList">EventgridNamespaceTopicSpacesConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfigurationInput">TopicSpacesConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identity"></a>

```csharp
public EventgridNamespaceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference">EventgridNamespaceIdentityOutputReference</a>

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRule"></a>

```csharp
public EventgridNamespaceInboundIpRuleList InboundIpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList">EventgridNamespaceInboundIpRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeouts"></a>

```csharp
public EventgridNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference">EventgridNamespaceTimeoutsOutputReference</a>

---

##### `TopicSpacesConfiguration`<sup>Required</sup> <a name="TopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfiguration"></a>

```csharp
public EventgridNamespaceTopicSpacesConfigurationList TopicSpacesConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList">EventgridNamespaceTopicSpacesConfigurationList</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identityInput"></a>

```csharp
public EventgridNamespaceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRuleInput"></a>

```csharp
public object InboundIpRuleInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccessInput"></a>

```csharp
public string PublicNetworkAccessInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicSpacesConfigurationInput`<sup>Optional</sup> <a name="TopicSpacesConfigurationInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfigurationInput"></a>

```csharp
public object TopicSpacesConfigurationInput { get; }
```

- *Type:* object

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccess"></a>

```csharp
public string PublicNetworkAccess { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridNamespaceConfig <a name="EventgridNamespaceConfig" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    double Capacity = null,
    string Id = null,
    EventgridNamespaceIdentity Identity = null,
    object InboundIpRule = null,
    string PublicNetworkAccess = null,
    string Sku = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EventgridNamespaceTimeouts Timeouts = null,
    object TopicSpacesConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#location EventgridNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#name EventgridNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#resource_group_name EventgridNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#capacity EventgridNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#id EventgridNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>object</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#public_network_access EventgridNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#sku EventgridNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#tags EventgridNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.topicSpacesConfiguration">TopicSpacesConfiguration</a></code> | <code>object</code> | topic_spaces_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#location EventgridNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#name EventgridNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#resource_group_name EventgridNamespace#resource_group_name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#capacity EventgridNamespace#capacity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#id EventgridNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.identity"></a>

```csharp
public EventgridNamespaceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#identity EventgridNamespace#identity}

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.inboundIpRule"></a>

```csharp
public object InboundIpRule { get; set; }
```

- *Type:* object

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#inbound_ip_rule EventgridNamespace#inbound_ip_rule}

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.publicNetworkAccess"></a>

```csharp
public string PublicNetworkAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#public_network_access EventgridNamespace#public_network_access}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#sku EventgridNamespace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#tags EventgridNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.timeouts"></a>

```csharp
public EventgridNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#timeouts EventgridNamespace#timeouts}

---

##### `TopicSpacesConfiguration`<sup>Optional</sup> <a name="TopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.topicSpacesConfiguration"></a>

```csharp
public object TopicSpacesConfiguration { get; set; }
```

- *Type:* object

topic_spaces_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#topic_spaces_configuration EventgridNamespace#topic_spaces_configuration}

---

### EventgridNamespaceIdentity <a name="EventgridNamespaceIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#type EventgridNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#identity_ids EventgridNamespace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#type EventgridNamespace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#identity_ids EventgridNamespace#identity_ids}.

---

### EventgridNamespaceInboundIpRule <a name="EventgridNamespaceInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceInboundIpRule {
    string IpMask,
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#ip_mask EventgridNamespace#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#action EventgridNamespace#action}. |

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#ip_mask EventgridNamespace#ip_mask}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#action EventgridNamespace#action}.

---

### EventgridNamespaceTimeouts <a name="EventgridNamespaceTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#create EventgridNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#delete EventgridNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#read EventgridNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#update EventgridNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#create EventgridNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#delete EventgridNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#read EventgridNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#update EventgridNamespace#update}.

---

### EventgridNamespaceTopicSpacesConfiguration <a name="EventgridNamespaceTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfiguration {
    string[] AlternativeAuthenticationNameSource = null,
    object DynamicRoutingEnrichment = null,
    double MaximumClientSessionsPerAuthenticationName = null,
    double MaximumSessionExpiryInHours = null,
    string RouteTopicId = null,
    object StaticRoutingEnrichment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.alternativeAuthenticationNameSource">AlternativeAuthenticationNameSource</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#alternative_authentication_name_source EventgridNamespace#alternative_authentication_name_source}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.dynamicRoutingEnrichment">DynamicRoutingEnrichment</a></code> | <code>object</code> | dynamic_routing_enrichment block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumClientSessionsPerAuthenticationName">MaximumClientSessionsPerAuthenticationName</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#maximum_client_sessions_per_authentication_name EventgridNamespace#maximum_client_sessions_per_authentication_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumSessionExpiryInHours">MaximumSessionExpiryInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#maximum_session_expiry_in_hours EventgridNamespace#maximum_session_expiry_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.routeTopicId">RouteTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#route_topic_id EventgridNamespace#route_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.staticRoutingEnrichment">StaticRoutingEnrichment</a></code> | <code>object</code> | static_routing_enrichment block. |

---

##### `AlternativeAuthenticationNameSource`<sup>Optional</sup> <a name="AlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.alternativeAuthenticationNameSource"></a>

```csharp
public string[] AlternativeAuthenticationNameSource { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#alternative_authentication_name_source EventgridNamespace#alternative_authentication_name_source}.

---

##### `DynamicRoutingEnrichment`<sup>Optional</sup> <a name="DynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.dynamicRoutingEnrichment"></a>

```csharp
public object DynamicRoutingEnrichment { get; set; }
```

- *Type:* object

dynamic_routing_enrichment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#dynamic_routing_enrichment EventgridNamespace#dynamic_routing_enrichment}

---

##### `MaximumClientSessionsPerAuthenticationName`<sup>Optional</sup> <a name="MaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumClientSessionsPerAuthenticationName"></a>

```csharp
public double MaximumClientSessionsPerAuthenticationName { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#maximum_client_sessions_per_authentication_name EventgridNamespace#maximum_client_sessions_per_authentication_name}.

---

##### `MaximumSessionExpiryInHours`<sup>Optional</sup> <a name="MaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumSessionExpiryInHours"></a>

```csharp
public double MaximumSessionExpiryInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#maximum_session_expiry_in_hours EventgridNamespace#maximum_session_expiry_in_hours}.

---

##### `RouteTopicId`<sup>Optional</sup> <a name="RouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.routeTopicId"></a>

```csharp
public string RouteTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#route_topic_id EventgridNamespace#route_topic_id}.

---

##### `StaticRoutingEnrichment`<sup>Optional</sup> <a name="StaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.staticRoutingEnrichment"></a>

```csharp
public object StaticRoutingEnrichment { get; set; }
```

- *Type:* object

static_routing_enrichment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#static_routing_enrichment EventgridNamespace#static_routing_enrichment}

---

### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}.

---

### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridNamespaceIdentityOutputReference <a name="EventgridNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.internalValue"></a>

```csharp
public EventgridNamespaceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---


### EventgridNamespaceInboundIpRuleList <a name="EventgridNamespaceInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceInboundIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get"></a>

```csharp
private EventgridNamespaceInboundIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceInboundIpRuleOutputReference <a name="EventgridNamespaceInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceInboundIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTimeoutsOutputReference <a name="EventgridNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get"></a>

```csharp
private EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationList <a name="EventgridNamespaceTopicSpacesConfigurationList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get"></a>

```csharp
private EventgridNamespaceTopicSpacesConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment">PutDynamicRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment">PutStaticRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetAlternativeAuthenticationNameSource">ResetAlternativeAuthenticationNameSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetDynamicRoutingEnrichment">ResetDynamicRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumClientSessionsPerAuthenticationName">ResetMaximumClientSessionsPerAuthenticationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumSessionExpiryInHours">ResetMaximumSessionExpiryInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetRouteTopicId">ResetRouteTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetStaticRoutingEnrichment">ResetStaticRoutingEnrichment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicRoutingEnrichment` <a name="PutDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment"></a>

```csharp
private void PutDynamicRoutingEnrichment(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment.parameter.value"></a>

- *Type:* object

---

##### `PutStaticRoutingEnrichment` <a name="PutStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment"></a>

```csharp
private void PutStaticRoutingEnrichment(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment.parameter.value"></a>

- *Type:* object

---

##### `ResetAlternativeAuthenticationNameSource` <a name="ResetAlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetAlternativeAuthenticationNameSource"></a>

```csharp
private void ResetAlternativeAuthenticationNameSource()
```

##### `ResetDynamicRoutingEnrichment` <a name="ResetDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetDynamicRoutingEnrichment"></a>

```csharp
private void ResetDynamicRoutingEnrichment()
```

##### `ResetMaximumClientSessionsPerAuthenticationName` <a name="ResetMaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumClientSessionsPerAuthenticationName"></a>

```csharp
private void ResetMaximumClientSessionsPerAuthenticationName()
```

##### `ResetMaximumSessionExpiryInHours` <a name="ResetMaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumSessionExpiryInHours"></a>

```csharp
private void ResetMaximumSessionExpiryInHours()
```

##### `ResetRouteTopicId` <a name="ResetRouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetRouteTopicId"></a>

```csharp
private void ResetRouteTopicId()
```

##### `ResetStaticRoutingEnrichment` <a name="ResetStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetStaticRoutingEnrichment"></a>

```csharp
private void ResetStaticRoutingEnrichment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichment">DynamicRoutingEnrichment</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichment">StaticRoutingEnrichment</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSourceInput">AlternativeAuthenticationNameSourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichmentInput">DynamicRoutingEnrichmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationNameInput">MaximumClientSessionsPerAuthenticationNameInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHoursInput">MaximumSessionExpiryInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicIdInput">RouteTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichmentInput">StaticRoutingEnrichmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSource">AlternativeAuthenticationNameSource</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationName">MaximumClientSessionsPerAuthenticationName</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHours">MaximumSessionExpiryInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicId">RouteTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicRoutingEnrichment`<sup>Required</sup> <a name="DynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichment"></a>

```csharp
public EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList DynamicRoutingEnrichment { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList</a>

---

##### `StaticRoutingEnrichment`<sup>Required</sup> <a name="StaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichment"></a>

```csharp
public EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList StaticRoutingEnrichment { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList</a>

---

##### `AlternativeAuthenticationNameSourceInput`<sup>Optional</sup> <a name="AlternativeAuthenticationNameSourceInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSourceInput"></a>

```csharp
public string[] AlternativeAuthenticationNameSourceInput { get; }
```

- *Type:* string[]

---

##### `DynamicRoutingEnrichmentInput`<sup>Optional</sup> <a name="DynamicRoutingEnrichmentInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichmentInput"></a>

```csharp
public object DynamicRoutingEnrichmentInput { get; }
```

- *Type:* object

---

##### `MaximumClientSessionsPerAuthenticationNameInput`<sup>Optional</sup> <a name="MaximumClientSessionsPerAuthenticationNameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationNameInput"></a>

```csharp
public double MaximumClientSessionsPerAuthenticationNameInput { get; }
```

- *Type:* double

---

##### `MaximumSessionExpiryInHoursInput`<sup>Optional</sup> <a name="MaximumSessionExpiryInHoursInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHoursInput"></a>

```csharp
public double MaximumSessionExpiryInHoursInput { get; }
```

- *Type:* double

---

##### `RouteTopicIdInput`<sup>Optional</sup> <a name="RouteTopicIdInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicIdInput"></a>

```csharp
public string RouteTopicIdInput { get; }
```

- *Type:* string

---

##### `StaticRoutingEnrichmentInput`<sup>Optional</sup> <a name="StaticRoutingEnrichmentInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichmentInput"></a>

```csharp
public object StaticRoutingEnrichmentInput { get; }
```

- *Type:* object

---

##### `AlternativeAuthenticationNameSource`<sup>Required</sup> <a name="AlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSource"></a>

```csharp
public string[] AlternativeAuthenticationNameSource { get; }
```

- *Type:* string[]

---

##### `MaximumClientSessionsPerAuthenticationName`<sup>Required</sup> <a name="MaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationName"></a>

```csharp
public double MaximumClientSessionsPerAuthenticationName { get; }
```

- *Type:* double

---

##### `MaximumSessionExpiryInHours`<sup>Required</sup> <a name="MaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHours"></a>

```csharp
public double MaximumSessionExpiryInHours { get; }
```

- *Type:* double

---

##### `RouteTopicId`<sup>Required</sup> <a name="RouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicId"></a>

```csharp
public string RouteTopicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get"></a>

```csharp
private EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



