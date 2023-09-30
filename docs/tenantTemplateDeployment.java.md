# `azurerm_tenant_template_deployment`

Refer to the Terraform Registory for docs: [`azurerm_tenant_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment).

# `tenantTemplateDeployment` Submodule <a name="`tenantTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.tenantTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TenantTemplateDeployment <a name="TenantTemplateDeployment" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment azurerm_tenant_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeployment;

TenantTemplateDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .debugLevel(java.lang.String)
//  .id(java.lang.String)
//  .parametersContent(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateContent(java.lang.String)
//  .templateSpecVersionId(java.lang.String)
//  .timeouts(TenantTemplateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateContent">templateContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.debugLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.parametersContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateSpecVersionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#timeouts TenantTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel">resetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent">resetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent">resetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId">resetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts"></a>

```java
public void putTimeouts(TenantTemplateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---

##### `resetDebugLevel` <a name="resetDebugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel"></a>

```java
public void resetDebugLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetParametersContent` <a name="resetParametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent"></a>

```java
public void resetParametersContent()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateContent` <a name="resetTemplateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent"></a>

```java
public void resetTemplateContent()
```

##### `resetTemplateSpecVersionId` <a name="resetTemplateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId"></a>

```java
public void resetTemplateSpecVersionId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeployment;

TenantTemplateDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeployment;

TenantTemplateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeployment;

TenantTemplateDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent">outputContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput">debugLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput">parametersContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput">templateContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput">templateSpecVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent"></a>

```java
public java.lang.String getOutputContent();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts"></a>

```java
public TenantTemplateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debugLevelInput`<sup>Optional</sup> <a name="debugLevelInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput"></a>

```java
public java.lang.String getDebugLevelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersContentInput`<sup>Optional</sup> <a name="parametersContentInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput"></a>

```java
public java.lang.String getParametersContentInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput"></a>

```java
public java.lang.String getTemplateContentInput();
```

- *Type:* java.lang.String

---

##### `templateSpecVersionIdInput`<sup>Optional</sup> <a name="templateSpecVersionIdInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput"></a>

```java
public java.lang.String getTemplateSpecVersionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---

##### `debugLevel`<sup>Required</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel"></a>

```java
public java.lang.String getDebugLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parametersContent`<sup>Required</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent"></a>

```java
public java.lang.String getParametersContent();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

---

##### `templateSpecVersionId`<sup>Required</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId"></a>

```java
public java.lang.String getTemplateSpecVersionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TenantTemplateDeploymentConfig <a name="TenantTemplateDeploymentConfig" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeploymentConfig;

TenantTemplateDeploymentConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .debugLevel(java.lang.String)
//  .id(java.lang.String)
//  .parametersContent(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateContent(java.lang.String)
//  .templateSpecVersionId(java.lang.String)
//  .timeouts(TenantTemplateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel"></a>

```java
public java.lang.String getDebugLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent"></a>

```java
public java.lang.String getParametersContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```java
public java.lang.String getTemplateSpecVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts"></a>

```java
public TenantTemplateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#timeouts TenantTemplateDeployment#timeouts}

---

### TenantTemplateDeploymentTimeouts <a name="TenantTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeploymentTimeouts;

TenantTemplateDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TenantTemplateDeploymentTimeoutsOutputReference <a name="TenantTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.tenant_template_deployment.TenantTemplateDeploymentTimeoutsOutputReference;

new TenantTemplateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---



