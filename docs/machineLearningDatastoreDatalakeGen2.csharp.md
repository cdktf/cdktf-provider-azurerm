# `machineLearningDatastoreDatalakeGen2` Submodule <a name="`machineLearningDatastoreDatalakeGen2` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreDatalakeGen2 <a name="MachineLearningDatastoreDatalakeGen2" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2 azurerm_machine_learning_datastore_datalake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreDatalakeGen2(Construct Scope, string Id, MachineLearningDatastoreDatalakeGen2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config">MachineLearningDatastoreDatalakeGen2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config">MachineLearningDatastoreDatalakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl">ResetAuthorityUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity">ResetServiceDataIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningDatastoreDatalakeGen2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

---

##### `ResetAuthorityUrl` <a name="ResetAuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl"></a>

```csharp
private void ResetAuthorityUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceDataIdentity` <a name="ResetServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity"></a>

```csharp
private void ResetServiceDataIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningDatastoreDatalakeGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreDatalakeGen2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreDatalakeGen2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreDatalakeGen2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreDatalakeGen2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MachineLearningDatastoreDatalakeGen2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningDatastoreDatalakeGen2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningDatastoreDatalakeGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningDatastoreDatalakeGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput">AuthorityUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput">ServiceDataIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl">AuthorityUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts"></a>

```csharp
public MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a>

---

##### `AuthorityUrlInput`<sup>Optional</sup> <a name="AuthorityUrlInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput"></a>

```csharp
public string AuthorityUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceDataIdentityInput`<sup>Optional</sup> <a name="ServiceDataIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput"></a>

```csharp
public string ServiceDataIdentityInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AuthorityUrl`<sup>Required</sup> <a name="AuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl"></a>

```csharp
public string AuthorityUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceDataIdentity`<sup>Required</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity"></a>

```csharp
public string ServiceDataIdentity { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreDatalakeGen2Config <a name="MachineLearningDatastoreDatalakeGen2Config" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreDatalakeGen2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string StorageContainerId,
    string WorkspaceId,
    string AuthorityUrl = null,
    string ClientId = null,
    string ClientSecret = null,
    string Description = null,
    string Id = null,
    string ServiceDataIdentity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TenantId = null,
    MachineLearningDatastoreDatalakeGen2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl">AuthorityUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}.

---

##### `AuthorityUrl`<sup>Optional</sup> <a name="AuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl"></a>

```csharp
public string AuthorityUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceDataIdentity`<sup>Optional</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity"></a>

```csharp
public string ServiceDataIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts"></a>

```csharp
public MachineLearningDatastoreDatalakeGen2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#timeouts MachineLearningDatastoreDatalakeGen2#timeouts}

---

### MachineLearningDatastoreDatalakeGen2Timeouts <a name="MachineLearningDatastoreDatalakeGen2Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreDatalakeGen2Timeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference <a name="MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



