# `privateDnsResolverVirtualNetworkLink` Submodule <a name="`privateDnsResolverVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverVirtualNetworkLink <a name="PrivateDnsResolverVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverVirtualNetworkLink(Construct Scope, string Id, PrivateDnsResolverVirtualNetworkLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig">PrivateDnsResolverVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig">PrivateDnsResolverVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateDnsResolverVirtualNetworkLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverVirtualNetworkLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverVirtualNetworkLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverVirtualNetworkLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverVirtualNetworkLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverVirtualNetworkLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput">DnsForwardingRulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts"></a>

```csharp
public PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `DnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="DnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput"></a>

```csharp
public string DnsForwardingRulesetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId"></a>

```csharp
public string DnsForwardingRulesetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverVirtualNetworkLinkConfig <a name="PrivateDnsResolverVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverVirtualNetworkLinkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DnsForwardingRulesetId,
    string Name,
    string VirtualNetworkId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    PrivateDnsResolverVirtualNetworkLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId"></a>

```csharp
public string DnsForwardingRulesetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}.

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts"></a>

```csharp
public PrivateDnsResolverVirtualNetworkLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#timeouts PrivateDnsResolverVirtualNetworkLink#timeouts}

---

### PrivateDnsResolverVirtualNetworkLinkTimeouts <a name="PrivateDnsResolverVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverVirtualNetworkLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



