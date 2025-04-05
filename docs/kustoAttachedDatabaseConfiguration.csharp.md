# `kustoAttachedDatabaseConfiguration` Submodule <a name="`kustoAttachedDatabaseConfiguration` Submodule" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoAttachedDatabaseConfiguration <a name="KustoAttachedDatabaseConfiguration" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration azurerm_kusto_attached_database_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfiguration(Construct Scope, string Id, KustoAttachedDatabaseConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing">PutSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterResourceId">ResetClusterResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind">ResetDefaultPrincipalModificationKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing">ResetSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSharing` <a name="PutSharing" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing"></a>

```csharp
private void PutSharing(KustoAttachedDatabaseConfigurationSharing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(KustoAttachedDatabaseConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetClusterResourceId` <a name="ResetClusterResourceId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterResourceId"></a>

```csharp
private void ResetClusterResourceId()
```

##### `ResetDefaultPrincipalModificationKind` <a name="ResetDefaultPrincipalModificationKind" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind"></a>

```csharp
private void ResetDefaultPrincipalModificationKind()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSharing` <a name="ResetSharing" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing"></a>

```csharp
private void ResetSharing()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoAttachedDatabaseConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoAttachedDatabaseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KustoAttachedDatabaseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames">AttachedDatabaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing">Sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceIdInput">ClusterResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput">DefaultPrincipalModificationKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput">SharingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttachedDatabaseNames`<sup>Required</sup> <a name="AttachedDatabaseNames" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames"></a>

```csharp
public string[] AttachedDatabaseNames { get; }
```

- *Type:* string[]

---

##### `Sharing`<sup>Required</sup> <a name="Sharing" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharingOutputReference Sharing { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts"></a>

```csharp
public KustoAttachedDatabaseConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterResourceIdInput`<sup>Optional</sup> <a name="ClusterResourceIdInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceIdInput"></a>

```csharp
public string ClusterResourceIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DefaultPrincipalModificationKindInput`<sup>Optional</sup> <a name="DefaultPrincipalModificationKindInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput"></a>

```csharp
public string DefaultPrincipalModificationKindInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SharingInput`<sup>Optional</sup> <a name="SharingInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing SharingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DefaultPrincipalModificationKind`<sup>Required</sup> <a name="DefaultPrincipalModificationKind" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind"></a>

```csharp
public string DefaultPrincipalModificationKind { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoAttachedDatabaseConfigurationConfig <a name="KustoAttachedDatabaseConfigurationConfig" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string DatabaseName,
    string Location,
    string Name,
    string ResourceGroupName,
    string ClusterId = null,
    string ClusterResourceId = null,
    string DefaultPrincipalModificationKind = null,
    string Id = null,
    KustoAttachedDatabaseConfigurationSharing Sharing = null,
    KustoAttachedDatabaseConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing">Sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | sharing block. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}.

---

##### `ClusterResourceId`<sup>Optional</sup> <a name="ClusterResourceId" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}.

---

##### `DefaultPrincipalModificationKind`<sup>Optional</sup> <a name="DefaultPrincipalModificationKind" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind"></a>

```csharp
public string DefaultPrincipalModificationKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sharing`<sup>Optional</sup> <a name="Sharing" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing Sharing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#sharing KustoAttachedDatabaseConfiguration#sharing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts"></a>

```csharp
public KustoAttachedDatabaseConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#timeouts KustoAttachedDatabaseConfiguration#timeouts}

---

### KustoAttachedDatabaseConfigurationSharing <a name="KustoAttachedDatabaseConfigurationSharing" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationSharing {
    string[] ExternalTablesToExclude = null,
    string[] ExternalTablesToInclude = null,
    string[] MaterializedViewsToExclude = null,
    string[] MaterializedViewsToInclude = null,
    string[] TablesToExclude = null,
    string[] TablesToInclude = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude">TablesToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude">TablesToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}. |

---

##### `ExternalTablesToExclude`<sup>Optional</sup> <a name="ExternalTablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude"></a>

```csharp
public string[] ExternalTablesToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}.

---

##### `ExternalTablesToInclude`<sup>Optional</sup> <a name="ExternalTablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude"></a>

```csharp
public string[] ExternalTablesToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}.

---

##### `MaterializedViewsToExclude`<sup>Optional</sup> <a name="MaterializedViewsToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude"></a>

```csharp
public string[] MaterializedViewsToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}.

---

##### `MaterializedViewsToInclude`<sup>Optional</sup> <a name="MaterializedViewsToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude"></a>

```csharp
public string[] MaterializedViewsToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}.

---

##### `TablesToExclude`<sup>Optional</sup> <a name="TablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude"></a>

```csharp
public string[] TablesToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}.

---

##### `TablesToInclude`<sup>Optional</sup> <a name="TablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude"></a>

```csharp
public string[] TablesToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}.

---

### KustoAttachedDatabaseConfigurationTimeouts <a name="KustoAttachedDatabaseConfigurationTimeouts" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoAttachedDatabaseConfigurationSharingOutputReference <a name="KustoAttachedDatabaseConfigurationSharingOutputReference" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationSharingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude">ResetExternalTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude">ResetExternalTablesToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude">ResetMaterializedViewsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude">ResetMaterializedViewsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude">ResetTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude">ResetTablesToInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalTablesToExclude` <a name="ResetExternalTablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude"></a>

```csharp
private void ResetExternalTablesToExclude()
```

##### `ResetExternalTablesToInclude` <a name="ResetExternalTablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude"></a>

```csharp
private void ResetExternalTablesToInclude()
```

##### `ResetMaterializedViewsToExclude` <a name="ResetMaterializedViewsToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude"></a>

```csharp
private void ResetMaterializedViewsToExclude()
```

##### `ResetMaterializedViewsToInclude` <a name="ResetMaterializedViewsToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude"></a>

```csharp
private void ResetMaterializedViewsToInclude()
```

##### `ResetTablesToExclude` <a name="ResetTablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude"></a>

```csharp
private void ResetTablesToExclude()
```

##### `ResetTablesToInclude` <a name="ResetTablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude"></a>

```csharp
private void ResetTablesToInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput">ExternalTablesToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput">ExternalTablesToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput">MaterializedViewsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput">MaterializedViewsToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput">TablesToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput">TablesToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude">TablesToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude">TablesToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalTablesToExcludeInput`<sup>Optional</sup> <a name="ExternalTablesToExcludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput"></a>

```csharp
public string[] ExternalTablesToExcludeInput { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToIncludeInput`<sup>Optional</sup> <a name="ExternalTablesToIncludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput"></a>

```csharp
public string[] ExternalTablesToIncludeInput { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToExcludeInput`<sup>Optional</sup> <a name="MaterializedViewsToExcludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput"></a>

```csharp
public string[] MaterializedViewsToExcludeInput { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToIncludeInput`<sup>Optional</sup> <a name="MaterializedViewsToIncludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput"></a>

```csharp
public string[] MaterializedViewsToIncludeInput { get; }
```

- *Type:* string[]

---

##### `TablesToExcludeInput`<sup>Optional</sup> <a name="TablesToExcludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput"></a>

```csharp
public string[] TablesToExcludeInput { get; }
```

- *Type:* string[]

---

##### `TablesToIncludeInput`<sup>Optional</sup> <a name="TablesToIncludeInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput"></a>

```csharp
public string[] TablesToIncludeInput { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToExclude`<sup>Required</sup> <a name="ExternalTablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude"></a>

```csharp
public string[] ExternalTablesToExclude { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToInclude`<sup>Required</sup> <a name="ExternalTablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude"></a>

```csharp
public string[] ExternalTablesToInclude { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToExclude`<sup>Required</sup> <a name="MaterializedViewsToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude"></a>

```csharp
public string[] MaterializedViewsToExclude { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToInclude`<sup>Required</sup> <a name="MaterializedViewsToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude"></a>

```csharp
public string[] MaterializedViewsToInclude { get; }
```

- *Type:* string[]

---

##### `TablesToExclude`<sup>Required</sup> <a name="TablesToExclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude"></a>

```csharp
public string[] TablesToExclude { get; }
```

- *Type:* string[]

---

##### `TablesToInclude`<sup>Required</sup> <a name="TablesToInclude" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude"></a>

```csharp
public string[] TablesToInclude { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---


### KustoAttachedDatabaseConfigurationTimeoutsOutputReference <a name="KustoAttachedDatabaseConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



