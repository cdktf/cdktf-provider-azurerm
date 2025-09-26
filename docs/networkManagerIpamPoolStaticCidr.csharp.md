# `networkManagerIpamPoolStaticCidr` Submodule <a name="`networkManagerIpamPoolStaticCidr` Submodule" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerIpamPoolStaticCidr <a name="NetworkManagerIpamPoolStaticCidr" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr azurerm_network_manager_ipam_pool_static_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerIpamPoolStaticCidr(Construct Scope, string Id, NetworkManagerIpamPoolStaticCidrConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig">NetworkManagerIpamPoolStaticCidrConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig">NetworkManagerIpamPoolStaticCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetAddressPrefixes">ResetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetNumberOfIpAddressesToAllocate">ResetNumberOfIpAddressesToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagerIpamPoolStaticCidrTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts">NetworkManagerIpamPoolStaticCidrTimeouts</a>

---

##### `ResetAddressPrefixes` <a name="ResetAddressPrefixes" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetAddressPrefixes"></a>

```csharp
private void ResetAddressPrefixes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumberOfIpAddressesToAllocate` <a name="ResetNumberOfIpAddressesToAllocate" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetNumberOfIpAddressesToAllocate"></a>

```csharp
private void ResetNumberOfIpAddressesToAllocate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerIpamPoolStaticCidr resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerIpamPoolStaticCidr.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerIpamPoolStaticCidr.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerIpamPoolStaticCidr.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerIpamPoolStaticCidr.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkManagerIpamPoolStaticCidr resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagerIpamPoolStaticCidr to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagerIpamPoolStaticCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerIpamPoolStaticCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference">NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.numberOfIpAddressesToAllocateInput">NumberOfIpAddressesToAllocateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.numberOfIpAddressesToAllocate">NumberOfIpAddressesToAllocate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.timeouts"></a>

```csharp
public NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference">NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference</a>

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.addressPrefixesInput"></a>

```csharp
public string[] AddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfIpAddressesToAllocateInput`<sup>Optional</sup> <a name="NumberOfIpAddressesToAllocateInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.numberOfIpAddressesToAllocateInput"></a>

```csharp
public string NumberOfIpAddressesToAllocateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfIpAddressesToAllocate`<sup>Required</sup> <a name="NumberOfIpAddressesToAllocate" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.numberOfIpAddressesToAllocate"></a>

```csharp
public string NumberOfIpAddressesToAllocate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidr.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerIpamPoolStaticCidrConfig <a name="NetworkManagerIpamPoolStaticCidrConfig" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerIpamPoolStaticCidrConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamPoolId,
    string Name,
    string[] AddressPrefixes = null,
    string Id = null,
    string NumberOfIpAddressesToAllocate = null,
    NetworkManagerIpamPoolStaticCidrTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#ipam_pool_id NetworkManagerIpamPoolStaticCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#name NetworkManagerIpamPoolStaticCidr#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#address_prefixes NetworkManagerIpamPoolStaticCidr#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#id NetworkManagerIpamPoolStaticCidr#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.numberOfIpAddressesToAllocate">NumberOfIpAddressesToAllocate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#number_of_ip_addresses_to_allocate NetworkManagerIpamPoolStaticCidr#number_of_ip_addresses_to_allocate}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts">NetworkManagerIpamPoolStaticCidrTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#ipam_pool_id NetworkManagerIpamPoolStaticCidr#ipam_pool_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#name NetworkManagerIpamPoolStaticCidr#name}.

---

##### `AddressPrefixes`<sup>Optional</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#address_prefixes NetworkManagerIpamPoolStaticCidr#address_prefixes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#id NetworkManagerIpamPoolStaticCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfIpAddressesToAllocate`<sup>Optional</sup> <a name="NumberOfIpAddressesToAllocate" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.numberOfIpAddressesToAllocate"></a>

```csharp
public string NumberOfIpAddressesToAllocate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#number_of_ip_addresses_to_allocate NetworkManagerIpamPoolStaticCidr#number_of_ip_addresses_to_allocate}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrConfig.property.timeouts"></a>

```csharp
public NetworkManagerIpamPoolStaticCidrTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts">NetworkManagerIpamPoolStaticCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#timeouts NetworkManagerIpamPoolStaticCidr#timeouts}

---

### NetworkManagerIpamPoolStaticCidrTimeouts <a name="NetworkManagerIpamPoolStaticCidrTimeouts" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerIpamPoolStaticCidrTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#create NetworkManagerIpamPoolStaticCidr#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#delete NetworkManagerIpamPoolStaticCidr#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#read NetworkManagerIpamPoolStaticCidr#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#update NetworkManagerIpamPoolStaticCidr#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#create NetworkManagerIpamPoolStaticCidr#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#delete NetworkManagerIpamPoolStaticCidr#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#read NetworkManagerIpamPoolStaticCidr#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_ipam_pool_static_cidr#update NetworkManagerIpamPoolStaticCidr#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference <a name="NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerIpamPoolStaticCidr.NetworkManagerIpamPoolStaticCidrTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



