# `healthcareService` Submodule <a name="`healthcareService` Submodule" id="@cdktf/provider-azurerm.healthcareService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareService <a name="HealthcareService" id="@cdktf/provider-azurerm.healthcareService.HealthcareService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service azurerm_healthcare_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareService;

HealthcareService.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .accessPolicyObjectIds(java.util.List<java.lang.String>)
//  .authenticationConfiguration(HealthcareServiceAuthenticationConfiguration)
//  .corsConfiguration(HealthcareServiceCorsConfiguration)
//  .cosmosdbKeyVaultKeyVersionlessId(java.lang.String)
//  .cosmosdbThroughput(java.lang.Number)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HealthcareServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#location HealthcareService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#name HealthcareService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.cosmosdbKeyVaultKeyVersionlessId">cosmosdbKeyVaultKeyVersionlessId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.cosmosdbThroughput">cosmosdbThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#id HealthcareService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#kind HealthcareService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#tags HealthcareService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#location HealthcareService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#name HealthcareService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.accessPolicyObjectIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#authentication_configuration HealthcareService#authentication_configuration}

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.corsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cors_configuration HealthcareService#cors_configuration}

---

##### `cosmosdbKeyVaultKeyVersionlessId`<sup>Optional</sup> <a name="cosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.cosmosdbKeyVaultKeyVersionlessId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}.

---

##### `cosmosdbThroughput`<sup>Optional</sup> <a name="cosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.cosmosdbThroughput"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#id HealthcareService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#kind HealthcareService#kind}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#tags HealthcareService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#timeouts HealthcareService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration">putCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds">resetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration">resetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId">resetCosmosdbKeyVaultKeyVersionlessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput">resetCosmosdbThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(HealthcareServiceAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `putCorsConfiguration` <a name="putCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration"></a>

```java
public void putCorsConfiguration(HealthcareServiceCorsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts"></a>

```java
public void putTimeouts(HealthcareServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---

##### `resetAccessPolicyObjectIds` <a name="resetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds"></a>

```java
public void resetAccessPolicyObjectIds()
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetCorsConfiguration` <a name="resetCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration"></a>

```java
public void resetCorsConfiguration()
```

##### `resetCosmosdbKeyVaultKeyVersionlessId` <a name="resetCosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId"></a>

```java
public void resetCosmosdbKeyVaultKeyVersionlessId()
```

##### `resetCosmosdbThroughput` <a name="resetCosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput"></a>

```java
public void resetCosmosdbThroughput()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId"></a>

```java
public void resetId()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind"></a>

```java
public void resetKind()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareService;

HealthcareService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareService;

HealthcareService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareService;

HealthcareService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareService;

HealthcareService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthcareService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthcareService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthcareService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput">accessPolicyObjectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput">corsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput">cosmosdbKeyVaultKeyVersionlessIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput">cosmosdbThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId">cosmosdbKeyVaultKeyVersionlessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput">cosmosdbThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration"></a>

```java
public HealthcareServiceAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a>

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration"></a>

```java
public HealthcareServiceCorsConfigurationOutputReference getCorsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts"></a>

```java
public HealthcareServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a>

---

##### `accessPolicyObjectIdsInput`<sup>Optional</sup> <a name="accessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput"></a>

```java
public HealthcareServiceAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `corsConfigurationInput`<sup>Optional</sup> <a name="corsConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput"></a>

```java
public HealthcareServiceCorsConfiguration getCorsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `cosmosdbKeyVaultKeyVersionlessIdInput`<sup>Optional</sup> <a name="cosmosdbKeyVaultKeyVersionlessIdInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput"></a>

```java
public java.lang.String getCosmosdbKeyVaultKeyVersionlessIdInput();
```

- *Type:* java.lang.String

---

##### `cosmosdbThroughputInput`<sup>Optional</sup> <a name="cosmosdbThroughputInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput"></a>

```java
public java.lang.Number getCosmosdbThroughputInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---

##### `accessPolicyObjectIds`<sup>Required</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cosmosdbKeyVaultKeyVersionlessId`<sup>Required</sup> <a name="cosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```java
public java.lang.String getCosmosdbKeyVaultKeyVersionlessId();
```

- *Type:* java.lang.String

---

##### `cosmosdbThroughput`<sup>Required</sup> <a name="cosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput"></a>

```java
public java.lang.Number getCosmosdbThroughput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareServiceAuthenticationConfiguration <a name="HealthcareServiceAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceAuthenticationConfiguration;

HealthcareServiceAuthenticationConfiguration.builder()
//  .audience(java.lang.String)
//  .authority(java.lang.String)
//  .smartProxyEnabled(java.lang.Boolean)
//  .smartProxyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#audience HealthcareService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority">authority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#authority HealthcareService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#audience HealthcareService#audience}.

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#authority HealthcareService#authority}.

---

##### `smartProxyEnabled`<sup>Optional</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled"></a>

```java
public java.lang.Object getSmartProxyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}.

---

### HealthcareServiceConfig <a name="HealthcareServiceConfig" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceConfig;

HealthcareServiceConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .accessPolicyObjectIds(java.util.List<java.lang.String>)
//  .authenticationConfiguration(HealthcareServiceAuthenticationConfiguration)
//  .corsConfiguration(HealthcareServiceCorsConfiguration)
//  .cosmosdbKeyVaultKeyVersionlessId(java.lang.String)
//  .cosmosdbThroughput(java.lang.Number)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HealthcareServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#location HealthcareService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#name HealthcareService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId">cosmosdbKeyVaultKeyVersionlessId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput">cosmosdbThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#id HealthcareService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#kind HealthcareService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#tags HealthcareService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#location HealthcareService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#name HealthcareService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration"></a>

```java
public HealthcareServiceAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#authentication_configuration HealthcareService#authentication_configuration}

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration"></a>

```java
public HealthcareServiceCorsConfiguration getCorsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cors_configuration HealthcareService#cors_configuration}

---

##### `cosmosdbKeyVaultKeyVersionlessId`<sup>Optional</sup> <a name="cosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```java
public java.lang.String getCosmosdbKeyVaultKeyVersionlessId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}.

---

##### `cosmosdbThroughput`<sup>Optional</sup> <a name="cosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput"></a>

```java
public java.lang.Number getCosmosdbThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#id HealthcareService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#kind HealthcareService#kind}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#tags HealthcareService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts"></a>

```java
public HealthcareServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#timeouts HealthcareService#timeouts}

---

### HealthcareServiceCorsConfiguration <a name="HealthcareServiceCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceCorsConfiguration;

HealthcareServiceCorsConfiguration.builder()
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowedHeaders(java.util.List<java.lang.String>)
//  .allowedMethods(java.util.List<java.lang.String>)
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}.

---

### HealthcareServiceTimeouts <a name="HealthcareServiceTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceTimeouts;

HealthcareServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#create HealthcareService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#delete HealthcareService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#read HealthcareService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#update HealthcareService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#create HealthcareService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#delete HealthcareService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#read HealthcareService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/healthcare_service#update HealthcareService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareServiceAuthenticationConfigurationOutputReference <a name="HealthcareServiceAuthenticationConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceAuthenticationConfigurationOutputReference;

new HealthcareServiceAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled">resetSmartProxyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority"></a>

```java
public void resetAuthority()
```

##### `resetSmartProxyEnabled` <a name="resetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled"></a>

```java
public void resetSmartProxyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput">smartProxyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `smartProxyEnabledInput`<sup>Optional</sup> <a name="smartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput"></a>

```java
public java.lang.Object getSmartProxyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `smartProxyEnabled`<sup>Required</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled"></a>

```java
public java.lang.Object getSmartProxyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public HealthcareServiceAuthenticationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---


### HealthcareServiceCorsConfigurationOutputReference <a name="HealthcareServiceCorsConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceCorsConfigurationOutputReference;

new HealthcareServiceCorsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders"></a>

```java
public void resetAllowedHeaders()
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods"></a>

```java
public void resetAllowedMethods()
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```java
public void resetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue"></a>

```java
public HealthcareServiceCorsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---


### HealthcareServiceTimeoutsOutputReference <a name="HealthcareServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_service.HealthcareServiceTimeoutsOutputReference;

new HealthcareServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---



