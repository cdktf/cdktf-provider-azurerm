# `dataAzurermConsumptionBudgetSubscription` Submodule <a name="`dataAzurermConsumptionBudgetSubscription` Submodule" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConsumptionBudgetSubscription <a name="DataAzurermConsumptionBudgetSubscription" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription azurerm_consumption_budget_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscription;

DataAzurermConsumptionBudgetSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermConsumptionBudgetSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#timeouts DataAzurermConsumptionBudgetSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermConsumptionBudgetSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscription;

DataAzurermConsumptionBudgetSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscription;

DataAzurermConsumptionBudgetSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscription;

DataAzurermConsumptionBudgetSubscription.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscription;

DataAzurermConsumptionBudgetSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermConsumptionBudgetSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermConsumptionBudgetSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermConsumptionBudgetSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConsumptionBudgetSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList">DataAzurermConsumptionBudgetSubscriptionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList">DataAzurermConsumptionBudgetSubscriptionNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeGrain">timeGrain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference">DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList">DataAzurermConsumptionBudgetSubscriptionTimePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.filter"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList">DataAzurermConsumptionBudgetSubscriptionFilterList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.notification"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList">DataAzurermConsumptionBudgetSubscriptionNotificationList</a>

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeGrain"></a>

```java
public java.lang.String getTimeGrain();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeouts"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference">DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timePeriod"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionTimePeriodList getTimePeriod();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList">DataAzurermConsumptionBudgetSubscriptionTimePeriodList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConsumptionBudgetSubscriptionConfig <a name="DataAzurermConsumptionBudgetSubscriptionConfig" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionConfig;

DataAzurermConsumptionBudgetSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermConsumptionBudgetSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.timeouts"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#timeouts DataAzurermConsumptionBudgetSubscription#timeouts}

---

### DataAzurermConsumptionBudgetSubscriptionFilter <a name="DataAzurermConsumptionBudgetSubscriptionFilter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilter;

DataAzurermConsumptionBudgetSubscriptionFilter.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionFilterDimension <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension;

DataAzurermConsumptionBudgetSubscriptionFilterDimension.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionFilterNot <a name="DataAzurermConsumptionBudgetSubscriptionFilterNot" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNot;

DataAzurermConsumptionBudgetSubscriptionFilterNot.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimension <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension;

DataAzurermConsumptionBudgetSubscriptionFilterNotDimension.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionFilterNotTag <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag;

DataAzurermConsumptionBudgetSubscriptionFilterNotTag.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionFilterTag <a name="DataAzurermConsumptionBudgetSubscriptionFilterTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterTag;

DataAzurermConsumptionBudgetSubscriptionFilterTag.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionNotification <a name="DataAzurermConsumptionBudgetSubscriptionNotification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionNotification;

DataAzurermConsumptionBudgetSubscriptionNotification.builder()
    .build();
```


### DataAzurermConsumptionBudgetSubscriptionTimeouts <a name="DataAzurermConsumptionBudgetSubscriptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionTimeouts;

DataAzurermConsumptionBudgetSubscriptionTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#read DataAzurermConsumptionBudgetSubscription#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/consumption_budget_subscription#read DataAzurermConsumptionBudgetSubscription#read}.

---

### DataAzurermConsumptionBudgetSubscriptionTimePeriod <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod;

DataAzurermConsumptionBudgetSubscriptionTimePeriod.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConsumptionBudgetSubscriptionFilterDimensionList <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList;

new DataAzurermConsumptionBudgetSubscriptionFilterDimensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension">DataAzurermConsumptionBudgetSubscriptionFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension">DataAzurermConsumptionBudgetSubscriptionFilterDimension</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterList <a name="DataAzurermConsumptionBudgetSubscriptionFilterList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterList;

new DataAzurermConsumptionBudgetSubscriptionFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList;

new DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension">DataAzurermConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension">DataAzurermConsumptionBudgetSubscriptionFilterNotDimension</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList;

new DataAzurermConsumptionBudgetSubscriptionFilterNotList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList">DataAzurermConsumptionBudgetSubscriptionFilterNotTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot">DataAzurermConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList getDimension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList">DataAzurermConsumptionBudgetSubscriptionFilterNotTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot">DataAzurermConsumptionBudgetSubscriptionFilterNot</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotTagList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList;

new DataAzurermConsumptionBudgetSubscriptionFilterNotTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag">DataAzurermConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag">DataAzurermConsumptionBudgetSubscriptionFilterNotTag</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList">DataAzurermConsumptionBudgetSubscriptionFilterNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList">DataAzurermConsumptionBudgetSubscriptionFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter">DataAzurermConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.dimension"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterDimensionList getDimension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.not"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterNotList getNot();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList">DataAzurermConsumptionBudgetSubscriptionFilterNotList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.tag"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList">DataAzurermConsumptionBudgetSubscriptionFilterTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter">DataAzurermConsumptionBudgetSubscriptionFilter</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterTagList <a name="DataAzurermConsumptionBudgetSubscriptionFilterTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList;

new DataAzurermConsumptionBudgetSubscriptionFilterTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference;

new DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag">DataAzurermConsumptionBudgetSubscriptionFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionFilterTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag">DataAzurermConsumptionBudgetSubscriptionFilterTag</a>

---


### DataAzurermConsumptionBudgetSubscriptionNotificationList <a name="DataAzurermConsumptionBudgetSubscriptionNotificationList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionNotificationList;

new DataAzurermConsumptionBudgetSubscriptionNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference;

new DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails">contactEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups">contactGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles">contactRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification">DataAzurermConsumptionBudgetSubscriptionNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails"></a>

```java
public java.util.List<java.lang.String> getContactEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contactGroups`<sup>Required</sup> <a name="contactGroups" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups"></a>

```java
public java.util.List<java.lang.String> getContactGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contactRoles`<sup>Required</sup> <a name="contactRoles" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles"></a>

```java
public java.util.List<java.lang.String> getContactRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification">DataAzurermConsumptionBudgetSubscriptionNotification</a>

---


### DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference;

new DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---


### DataAzurermConsumptionBudgetSubscriptionTimePeriodList <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriodList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList;

new DataAzurermConsumptionBudgetSubscriptionTimePeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_consumption_budget_subscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference;

new DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod">DataAzurermConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue"></a>

```java
public DataAzurermConsumptionBudgetSubscriptionTimePeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod">DataAzurermConsumptionBudgetSubscriptionTimePeriod</a>

---



