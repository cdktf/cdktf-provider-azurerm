# `elasticSanVolumeGroup` Submodule <a name="`elasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticSanVolumeGroup <a name="ElasticSanVolumeGroup" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroup(Construct Scope, string Id, ElasticSanVolumeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig">ElasticSanVolumeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig">ElasticSanVolumeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule">PutNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule">ResetNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption"></a>

```csharp
private void PutEncryption(ElasticSanVolumeGroupEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity"></a>

```csharp
private void PutIdentity(ElasticSanVolumeGroupIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---

##### `PutNetworkRule` <a name="PutNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule"></a>

```csharp
private void PutNetworkRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticSanVolumeGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetNetworkRule` <a name="ResetNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule"></a>

```csharp
private void ResetNetworkRule()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ElasticSanVolumeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ElasticSanVolumeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ElasticSanVolumeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ElasticSanVolumeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticSanVolumeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule">NetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput">ElasticSanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput">NetworkRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId">ElasticSanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption"></a>

```csharp
public ElasticSanVolumeGroupEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity"></a>

```csharp
public ElasticSanVolumeGroupIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a>

---

##### `NetworkRule`<sup>Required</sup> <a name="NetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule"></a>

```csharp
public ElasticSanVolumeGroupNetworkRuleList NetworkRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts"></a>

```csharp
public ElasticSanVolumeGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `ElasticSanIdInput`<sup>Optional</sup> <a name="ElasticSanIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```csharp
public string ElasticSanIdInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput"></a>

```csharp
public ElasticSanVolumeGroupEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput"></a>

```csharp
public ElasticSanVolumeGroupIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRuleInput`<sup>Optional</sup> <a name="NetworkRuleInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput"></a>

```csharp
public object NetworkRuleInput { get; }
```

- *Type:* object

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ElasticSanId`<sup>Required</sup> <a name="ElasticSanId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId"></a>

```csharp
public string ElasticSanId { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticSanVolumeGroupConfig <a name="ElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ElasticSanId,
    string Name,
    ElasticSanVolumeGroupEncryption Encryption = null,
    string EncryptionType = null,
    string Id = null,
    ElasticSanVolumeGroupIdentity Identity = null,
    object NetworkRule = null,
    string ProtocolType = null,
    ElasticSanVolumeGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId">ElasticSanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule">NetworkRule</a></code> | <code>object</code> | network_rule block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ElasticSanId`<sup>Required</sup> <a name="ElasticSanId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```csharp
public string ElasticSanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption"></a>

```csharp
public ElasticSanVolumeGroupEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#encryption ElasticSanVolumeGroup#encryption}

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity"></a>

```csharp
public ElasticSanVolumeGroupIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#identity ElasticSanVolumeGroup#identity}

---

##### `NetworkRule`<sup>Optional</sup> <a name="NetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule"></a>

```csharp
public object NetworkRule { get; set; }
```

- *Type:* object

network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#network_rule ElasticSanVolumeGroup#network_rule}

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts"></a>

```csharp
public ElasticSanVolumeGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#timeouts ElasticSanVolumeGroup#timeouts}

---

### ElasticSanVolumeGroupEncryption <a name="ElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupEncryption {
    string KeyVaultKeyId,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}.

---

### ElasticSanVolumeGroupIdentity <a name="ElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}.

---

### ElasticSanVolumeGroupNetworkRule <a name="ElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupNetworkRule {
    string SubnetId,
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}.

---

### ElasticSanVolumeGroupTimeouts <a name="ElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticSanVolumeGroupEncryptionOutputReference <a name="ElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">CurrentVersionedKeyExpirationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">CurrentVersionedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">LastKeyRotationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentVersionedKeyExpirationTimestamp`<sup>Required</sup> <a name="CurrentVersionedKeyExpirationTimestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```csharp
public string CurrentVersionedKeyExpirationTimestamp { get; }
```

- *Type:* string

---

##### `CurrentVersionedKeyId`<sup>Required</sup> <a name="CurrentVersionedKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```csharp
public string CurrentVersionedKeyId { get; }
```

- *Type:* string

---

##### `LastKeyRotationTimestamp`<sup>Required</sup> <a name="LastKeyRotationTimestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```csharp
public string LastKeyRotationTimestamp { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```csharp
public ElasticSanVolumeGroupEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---


### ElasticSanVolumeGroupIdentityOutputReference <a name="ElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```csharp
public ElasticSanVolumeGroupIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---


### ElasticSanVolumeGroupNetworkRuleList <a name="ElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupNetworkRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get"></a>

```csharp
private ElasticSanVolumeGroupNetworkRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticSanVolumeGroupNetworkRuleOutputReference <a name="ElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupNetworkRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticSanVolumeGroupTimeoutsOutputReference <a name="ElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ElasticSanVolumeGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



