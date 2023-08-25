# `azurerm_machine_learning_datastore_blobstorage`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_datastore_blobstorage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage).

# `machineLearningDatastoreBlobstorage` Submodule <a name="`machineLearningDatastoreBlobstorage` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreBlobstorage <a name="MachineLearningDatastoreBlobstorage" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreBlobstorage(Construct Scope, string Id, MachineLearningDatastoreBlobstorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig">MachineLearningDatastoreBlobstorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig">MachineLearningDatastoreBlobstorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity">ResetServiceDataAuthIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature">ResetSharedAccessSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningDatastoreBlobstorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey"></a>

```csharp
private void ResetAccountKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetServiceDataAuthIdentity` <a name="ResetServiceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity"></a>

```csharp
private void ResetServiceDataAuthIdentity()
```

##### `ResetSharedAccessSignature` <a name="ResetSharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature"></a>

```csharp
private void ResetSharedAccessSignature()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreBlobstorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreBlobstorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningDatastoreBlobstorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput">ServiceDataAuthIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput">SharedAccessSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity">ServiceDataAuthIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature">SharedAccessSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts"></a>

```csharp
public MachineLearningDatastoreBlobstorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceDataAuthIdentityInput`<sup>Optional</sup> <a name="ServiceDataAuthIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput"></a>

```csharp
public string ServiceDataAuthIdentityInput { get; }
```

- *Type:* string

---

##### `SharedAccessSignatureInput`<sup>Optional</sup> <a name="SharedAccessSignatureInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput"></a>

```csharp
public string SharedAccessSignatureInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceDataAuthIdentity`<sup>Required</sup> <a name="ServiceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity"></a>

```csharp
public string ServiceDataAuthIdentity { get; }
```

- *Type:* string

---

##### `SharedAccessSignature`<sup>Required</sup> <a name="SharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature"></a>

```csharp
public string SharedAccessSignature { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreBlobstorageConfig <a name="MachineLearningDatastoreBlobstorageConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreBlobstorageConfig {
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
    string AccountKey = null,
    string Description = null,
    string Id = null,
    object IsDefault = null,
    string ServiceDataAuthIdentity = null,
    string SharedAccessSignature = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MachineLearningDatastoreBlobstorageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity">ServiceDataAuthIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature">SharedAccessSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `ServiceDataAuthIdentity`<sup>Optional</sup> <a name="ServiceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity"></a>

```csharp
public string ServiceDataAuthIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `SharedAccessSignature`<sup>Optional</sup> <a name="SharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature"></a>

```csharp
public string SharedAccessSignature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts"></a>

```csharp
public MachineLearningDatastoreBlobstorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

### MachineLearningDatastoreBlobstorageTimeouts <a name="MachineLearningDatastoreBlobstorageTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreBlobstorageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreBlobstorageTimeoutsOutputReference <a name="MachineLearningDatastoreBlobstorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningDatastoreBlobstorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



