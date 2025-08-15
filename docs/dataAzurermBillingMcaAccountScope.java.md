# `dataAzurermBillingMcaAccountScope` Submodule <a name="`dataAzurermBillingMcaAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingMcaAccountScope <a name="DataAzurermBillingMcaAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope azurerm_billing_mca_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScope;

DataAzurermBillingMcaAccountScope.Builder.create(Construct scope, java.lang.String id)
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
    .billingAccountName(java.lang.String)
    .billingProfileName(java.lang.String)
    .invoiceSectionName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermBillingMcaAccountScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingAccountName">billingAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingProfileName">billingProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.invoiceSectionName">invoiceSectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `billingProfileName`<sup>Required</sup> <a name="billingProfileName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingProfileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `invoiceSectionName`<sup>Required</sup> <a name="invoiceSectionName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.invoiceSectionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermBillingMcaAccountScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermBillingMcaAccountScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScope;

DataAzurermBillingMcaAccountScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScope;

DataAzurermBillingMcaAccountScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScope;

DataAzurermBillingMcaAccountScope.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScope;

DataAzurermBillingMcaAccountScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermBillingMcaAccountScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermBillingMcaAccountScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermBillingMcaAccountScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermBillingMcaAccountScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermBillingMcaAccountScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput">billingAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput">billingProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput">invoiceSectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName">billingAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName">billingProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName">invoiceSectionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts"></a>

```java
public DataAzurermBillingMcaAccountScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a>

---

##### `billingAccountNameInput`<sup>Optional</sup> <a name="billingAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput"></a>

```java
public java.lang.String getBillingAccountNameInput();
```

- *Type:* java.lang.String

---

##### `billingProfileNameInput`<sup>Optional</sup> <a name="billingProfileNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput"></a>

```java
public java.lang.String getBillingProfileNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invoiceSectionNameInput`<sup>Optional</sup> <a name="invoiceSectionNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput"></a>

```java
public java.lang.String getInvoiceSectionNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName"></a>

```java
public java.lang.String getBillingAccountName();
```

- *Type:* java.lang.String

---

##### `billingProfileName`<sup>Required</sup> <a name="billingProfileName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName"></a>

```java
public java.lang.String getBillingProfileName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invoiceSectionName`<sup>Required</sup> <a name="invoiceSectionName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName"></a>

```java
public java.lang.String getInvoiceSectionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingMcaAccountScopeConfig <a name="DataAzurermBillingMcaAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScopeConfig;

DataAzurermBillingMcaAccountScopeConfig.builder()
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
    .billingAccountName(java.lang.String)
    .billingProfileName(java.lang.String)
    .invoiceSectionName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermBillingMcaAccountScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName">billingAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName">billingProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName">invoiceSectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName"></a>

```java
public java.lang.String getBillingAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `billingProfileName`<sup>Required</sup> <a name="billingProfileName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName"></a>

```java
public java.lang.String getBillingProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `invoiceSectionName`<sup>Required</sup> <a name="invoiceSectionName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName"></a>

```java
public java.lang.String getInvoiceSectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts"></a>

```java
public DataAzurermBillingMcaAccountScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

### DataAzurermBillingMcaAccountScopeTimeouts <a name="DataAzurermBillingMcaAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScopeTimeouts;

DataAzurermBillingMcaAccountScopeTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingMcaAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingMcaAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_billing_mca_account_scope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference;

new DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---



