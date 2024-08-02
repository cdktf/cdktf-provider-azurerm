# `privateDnsResolverInboundEndpoint` Submodule <a name="`privateDnsResolverInboundEndpoint` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverInboundEndpoint <a name="PrivateDnsResolverInboundEndpoint" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint azurerm_private_dns_resolver_inbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpoint(Construct Scope, string Id, PrivateDnsResolverInboundEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig">PrivateDnsResolverInboundEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig">PrivateDnsResolverInboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations">PutIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpConfigurations` <a name="PutIpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations"></a>

```csharp
private void PutIpConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateDnsResolverInboundEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverInboundEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverInboundEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverInboundEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverInboundEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverInboundEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverInboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverInboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurations">IpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList">PrivateDnsResolverInboundEndpointIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference">PrivateDnsResolverInboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurationsInput">IpConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput">PrivateDnsResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpConfigurations`<sup>Required</sup> <a name="IpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurations"></a>

```csharp
public PrivateDnsResolverInboundEndpointIpConfigurationsList IpConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList">PrivateDnsResolverInboundEndpointIpConfigurationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeouts"></a>

```csharp
public PrivateDnsResolverInboundEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference">PrivateDnsResolverInboundEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpConfigurationsInput`<sup>Optional</sup> <a name="IpConfigurationsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurationsInput"></a>

```csharp
public object IpConfigurationsInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateDnsResolverIdInput`<sup>Optional</sup> <a name="PrivateDnsResolverIdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput"></a>

```csharp
public string PrivateDnsResolverIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverId"></a>

```csharp
public string PrivateDnsResolverId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverInboundEndpointConfig <a name="PrivateDnsResolverInboundEndpointConfig" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object IpConfigurations,
    string Location,
    string Name,
    string PrivateDnsResolverId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PrivateDnsResolverInboundEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.ipConfigurations">IpConfigurations</a></code> | <code>object</code> | ip_configurations block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#location PrivateDnsResolverInboundEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#name PrivateDnsResolverInboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id PrivateDnsResolverInboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#id PrivateDnsResolverInboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#tags PrivateDnsResolverInboundEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpConfigurations`<sup>Required</sup> <a name="IpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.ipConfigurations"></a>

```csharp
public object IpConfigurations { get; set; }
```

- *Type:* object

ip_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#ip_configurations PrivateDnsResolverInboundEndpoint#ip_configurations}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#location PrivateDnsResolverInboundEndpoint#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#name PrivateDnsResolverInboundEndpoint#name}.

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId"></a>

```csharp
public string PrivateDnsResolverId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id PrivateDnsResolverInboundEndpoint#private_dns_resolver_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#id PrivateDnsResolverInboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#tags PrivateDnsResolverInboundEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.timeouts"></a>

```csharp
public PrivateDnsResolverInboundEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#timeouts PrivateDnsResolverInboundEndpoint#timeouts}

---

### PrivateDnsResolverInboundEndpointIpConfigurations <a name="PrivateDnsResolverInboundEndpointIpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointIpConfigurations {
    string SubnetId,
    string PrivateIpAddress = null,
    string PrivateIpAllocationMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#subnet_id PrivateDnsResolverInboundEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_address PrivateDnsResolverInboundEndpoint#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_allocation_method PrivateDnsResolverInboundEndpoint#private_ip_allocation_method}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#subnet_id PrivateDnsResolverInboundEndpoint#subnet_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_address PrivateDnsResolverInboundEndpoint#private_ip_address}.

---

##### `PrivateIpAllocationMethod`<sup>Optional</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAllocationMethod"></a>

```csharp
public string PrivateIpAllocationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_allocation_method PrivateDnsResolverInboundEndpoint#private_ip_allocation_method}.

---

### PrivateDnsResolverInboundEndpointTimeouts <a name="PrivateDnsResolverInboundEndpointTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#create PrivateDnsResolverInboundEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#delete PrivateDnsResolverInboundEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#read PrivateDnsResolverInboundEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#update PrivateDnsResolverInboundEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#create PrivateDnsResolverInboundEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#delete PrivateDnsResolverInboundEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#read PrivateDnsResolverInboundEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/private_dns_resolver_inbound_endpoint#update PrivateDnsResolverInboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverInboundEndpointIpConfigurationsList <a name="PrivateDnsResolverInboundEndpointIpConfigurationsList" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointIpConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.get"></a>

```csharp
private PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference <a name="PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAllocationMethod">ResetPrivateIpAllocationMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetPrivateIpAllocationMethod` <a name="ResetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAllocationMethod"></a>

```csharp
private void ResetPrivateIpAllocationMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethodInput">PrivateIpAllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `PrivateIpAllocationMethodInput`<sup>Optional</sup> <a name="PrivateIpAllocationMethodInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethodInput"></a>

```csharp
public string PrivateIpAllocationMethodInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PrivateIpAllocationMethod`<sup>Required</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod"></a>

```csharp
public string PrivateIpAllocationMethod { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivateDnsResolverInboundEndpointTimeoutsOutputReference <a name="PrivateDnsResolverInboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverInboundEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



