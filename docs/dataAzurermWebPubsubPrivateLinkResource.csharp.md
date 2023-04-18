# `data_azurerm_web_pubsub_private_link_resource`

Refer to the Terraform Registory for docs: [`data_azurerm_web_pubsub_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource).

# `dataAzurermWebPubsubPrivateLinkResource` Submodule <a name="`dataAzurermWebPubsubPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWebPubsubPrivateLinkResource <a name="DataAzurermWebPubsubPrivateLinkResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource azurerm_web_pubsub_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResource(Construct Scope, string Id, DataAzurermWebPubsubPrivateLinkResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig">DataAzurermWebPubsubPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig">DataAzurermWebPubsubPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermWebPubsubPrivateLinkResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermWebPubsubPrivateLinkResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermWebPubsubPrivateLinkResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermWebPubsubPrivateLinkResource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes">SharedPrivateLinkResourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SharedPrivateLinkResourceTypes`<sup>Required</sup> <a name="SharedPrivateLinkResourceTypes" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes"></a>

```csharp
public DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList SharedPrivateLinkResourceTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts"></a>

```csharp
public DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput"></a>

```csharp
public string WebPubsubIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWebPubsubPrivateLinkResourceConfig <a name="DataAzurermWebPubsubPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WebPubsubId,
    string Id = null,
    DataAzurermWebPubsubPrivateLinkResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts"></a>

```csharp
public DataAzurermWebPubsubPrivateLinkResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#timeouts DataAzurermWebPubsubPrivateLinkResource#timeouts}

---

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes {

};
```


### DataAzurermWebPubsubPrivateLinkResourceTimeouts <a name="DataAzurermWebPubsubPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get"></a>

```csharp
private DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName">SubresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName"></a>

```csharp
public string SubresourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a>

---


### DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



