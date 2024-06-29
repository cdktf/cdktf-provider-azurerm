# `kustoClusterManagedPrivateEndpoint` Submodule <a name="`kustoClusterManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoClusterManagedPrivateEndpoint <a name="KustoClusterManagedPrivateEndpoint" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint azurerm_kusto_cluster_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoClusterManagedPrivateEndpoint(Construct Scope, string Id, KustoClusterManagedPrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig">KustoClusterManagedPrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig">KustoClusterManagedPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion">ResetPrivateLinkResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(KustoClusterManagedPrivateEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateLinkResourceRegion` <a name="ResetPrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```csharp
private void ResetPrivateLinkResourceRegion()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage"></a>

```csharp
private void ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoClusterManagedPrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoClusterManagedPrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoClusterManagedPrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoClusterManagedPrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoClusterManagedPrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoClusterManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KustoClusterManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput">PrivateLinkResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput">PrivateLinkResourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput">RequestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage">RequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts"></a>

```csharp
public KustoClusterManagedPrivateEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateLinkResourceIdInput`<sup>Optional</sup> <a name="PrivateLinkResourceIdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```csharp
public string PrivateLinkResourceIdInput { get; }
```

- *Type:* string

---

##### `PrivateLinkResourceRegionInput`<sup>Optional</sup> <a name="PrivateLinkResourceRegionInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```csharp
public string PrivateLinkResourceRegionInput { get; }
```

- *Type:* string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput"></a>

```csharp
public string RequestMessageInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```csharp
public string PrivateLinkResourceId { get; }
```

- *Type:* string

---

##### `PrivateLinkResourceRegion`<sup>Required</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```csharp
public string PrivateLinkResourceRegion { get; }
```

- *Type:* string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage"></a>

```csharp
public string RequestMessage { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterManagedPrivateEndpointConfig <a name="KustoClusterManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoClusterManagedPrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string GroupId,
    string Name,
    string PrivateLinkResourceId,
    string ResourceGroupName,
    string Id = null,
    string PrivateLinkResourceRegion = null,
    string RequestMessage = null,
    KustoClusterManagedPrivateEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage">RequestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}.

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}.

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```csharp
public string PrivateLinkResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateLinkResourceRegion`<sup>Optional</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```csharp
public string PrivateLinkResourceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage"></a>

```csharp
public string RequestMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts"></a>

```csharp
public KustoClusterManagedPrivateEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#timeouts KustoClusterManagedPrivateEndpoint#timeouts}

---

### KustoClusterManagedPrivateEndpointTimeouts <a name="KustoClusterManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoClusterManagedPrivateEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterManagedPrivateEndpointTimeoutsOutputReference <a name="KustoClusterManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoClusterManagedPrivateEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



