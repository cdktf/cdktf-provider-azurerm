# `springCloudConfigurationService` Submodule <a name="`springCloudConfigurationService` Submodule" id="@cdktf/provider-azurerm.springCloudConfigurationService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudConfigurationService <a name="SpringCloudConfigurationService" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service azurerm_spring_cloud_configuration_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationService;

SpringCloudConfigurationService.Builder.create(Construct scope, java.lang.String id)
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
    .springCloudServiceId(java.lang.String)
//  .generation(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalInSeconds(java.lang.Number)
//  .repository(IResolvable)
//  .repository(java.util.List<SpringCloudConfigurationServiceRepository>)
//  .timeouts(SpringCloudConfigurationServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.generation">generation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.refreshIntervalInSeconds">refreshIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.repository">repository</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>></code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.generation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalInSeconds`<sup>Optional</sup> <a name="refreshIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.refreshIntervalInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.repository"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository">putRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration">resetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRefreshIntervalInSeconds">resetRefreshIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepository` <a name="putRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository"></a>

```java
public void putRepository(IResolvable OR java.util.List<SpringCloudConfigurationServiceRepository> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudConfigurationServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

---

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration"></a>

```java
public void resetGeneration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshIntervalInSeconds` <a name="resetRefreshIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRefreshIntervalInSeconds"></a>

```java
public void resetRefreshIntervalInSeconds()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationService;

SpringCloudConfigurationService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationService;

SpringCloudConfigurationService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationService;

SpringCloudConfigurationService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationService;

SpringCloudConfigurationService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudConfigurationService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudConfigurationService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudConfigurationService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudConfigurationService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSecondsInput">refreshIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput">repositoryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSeconds">refreshIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository"></a>

```java
public SpringCloudConfigurationServiceRepositoryList getRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts"></a>

```java
public SpringCloudConfigurationServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a>

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInSecondsInput`<sup>Optional</sup> <a name="refreshIntervalInSecondsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSecondsInput"></a>

```java
public java.lang.Number getRefreshIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput"></a>

```java
public java.lang.Object getRepositoryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>>

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInSeconds`<sup>Required</sup> <a name="refreshIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSeconds"></a>

```java
public java.lang.Number getRefreshIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudConfigurationServiceConfig <a name="SpringCloudConfigurationServiceConfig" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceConfig;

SpringCloudConfigurationServiceConfig.builder()
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
    .springCloudServiceId(java.lang.String)
//  .generation(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalInSeconds(java.lang.Number)
//  .repository(IResolvable)
//  .repository(java.util.List<SpringCloudConfigurationServiceRepository>)
//  .timeouts(SpringCloudConfigurationServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation">generation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.refreshIntervalInSeconds">refreshIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository">repository</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>></code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalInSeconds`<sup>Optional</sup> <a name="refreshIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.refreshIntervalInSeconds"></a>

```java
public java.lang.Number getRefreshIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository"></a>

```java
public java.lang.Object getRepository();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts"></a>

```java
public SpringCloudConfigurationServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}

---

### SpringCloudConfigurationServiceRepository <a name="SpringCloudConfigurationServiceRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceRepository;

SpringCloudConfigurationServiceRepository.builder()
    .label(java.lang.String)
    .name(java.lang.String)
    .patterns(java.util.List<java.lang.String>)
    .uri(java.lang.String)
//  .caCertificateId(java.lang.String)
//  .hostKey(java.lang.String)
//  .hostKeyAlgorithm(java.lang.String)
//  .password(java.lang.String)
//  .privateKey(java.lang.String)
//  .searchPaths(java.util.List<java.lang.String>)
//  .strictHostKeyChecking(java.lang.Boolean)
//  .strictHostKeyChecking(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns">patterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths">searchPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking">strictHostKeyChecking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns"></a>

```java
public java.util.List<java.lang.String> getPatterns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}.

---

##### `caCertificateId`<sup>Optional</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}.

---

##### `hostKeyAlgorithm`<sup>Optional</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm"></a>

```java
public java.lang.String getHostKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}.

---

##### `searchPaths`<sup>Optional</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths"></a>

```java
public java.util.List<java.lang.String> getSearchPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}.

---

##### `strictHostKeyChecking`<sup>Optional</sup> <a name="strictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking"></a>

```java
public java.lang.Object getStrictHostKeyChecking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}.

---

### SpringCloudConfigurationServiceTimeouts <a name="SpringCloudConfigurationServiceTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceTimeouts;

SpringCloudConfigurationServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudConfigurationServiceRepositoryList <a name="SpringCloudConfigurationServiceRepositoryList" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceRepositoryList;

new SpringCloudConfigurationServiceRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get"></a>

```java
public SpringCloudConfigurationServiceRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>>

---


### SpringCloudConfigurationServiceRepositoryOutputReference <a name="SpringCloudConfigurationServiceRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceRepositoryOutputReference;

new SpringCloudConfigurationServiceRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId">resetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm">resetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths">resetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking">resetStrictHostKeyChecking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificateId` <a name="resetCaCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId"></a>

```java
public void resetCaCertificateId()
```

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey"></a>

```java
public void resetHostKey()
```

##### `resetHostKeyAlgorithm` <a name="resetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm"></a>

```java
public void resetHostKeyAlgorithm()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetSearchPaths` <a name="resetSearchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths"></a>

```java
public void resetSearchPaths()
```

##### `resetStrictHostKeyChecking` <a name="resetStrictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking"></a>

```java
public void resetStrictHostKeyChecking()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput">caCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput">hostKeyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput">hostKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput">patternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput">searchPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput">strictHostKeyCheckingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns">patterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths">searchPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking">strictHostKeyChecking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateIdInput`<sup>Optional</sup> <a name="caCertificateIdInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput"></a>

```java
public java.lang.String getCaCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `hostKeyAlgorithmInput`<sup>Optional</sup> <a name="hostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput"></a>

```java
public java.lang.String getHostKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput"></a>

```java
public java.lang.String getHostKeyInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `patternsInput`<sup>Optional</sup> <a name="patternsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput"></a>

```java
public java.util.List<java.lang.String> getPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `searchPathsInput`<sup>Optional</sup> <a name="searchPathsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput"></a>

```java
public java.util.List<java.lang.String> getSearchPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strictHostKeyCheckingInput`<sup>Optional</sup> <a name="strictHostKeyCheckingInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput"></a>

```java
public java.lang.Object getStrictHostKeyCheckingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm"></a>

```java
public java.lang.String getHostKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns"></a>

```java
public java.util.List<java.lang.String> getPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `searchPaths`<sup>Required</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths"></a>

```java
public java.util.List<java.lang.String> getSearchPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strictHostKeyChecking`<sup>Required</sup> <a name="strictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking"></a>

```java
public java.lang.Object getStrictHostKeyChecking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>

---


### SpringCloudConfigurationServiceTimeoutsOutputReference <a name="SpringCloudConfigurationServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_configuration_service.SpringCloudConfigurationServiceTimeoutsOutputReference;

new SpringCloudConfigurationServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

---



