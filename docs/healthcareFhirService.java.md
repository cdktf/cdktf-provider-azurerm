# `healthcareFhirService` Submodule <a name="`healthcareFhirService` Submodule" id="@cdktf/provider-azurerm.healthcareFhirService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirService <a name="HealthcareFhirService" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service azurerm_healthcare_fhir_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirService;

HealthcareFhirService.Builder.create(Construct scope, java.lang.String id)
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
    .authentication(HealthcareFhirServiceAuthentication)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceId(java.lang.String)
//  .accessPolicyObjectIds(java.util.List<java.lang.String>)
//  .configurationExportStorageAccountName(java.lang.String)
//  .containerRegistryLoginServerUrl(java.util.List<java.lang.String>)
//  .cors(HealthcareFhirServiceCors)
//  .id(java.lang.String)
//  .identity(HealthcareFhirServiceIdentity)
//  .kind(java.lang.String)
//  .ociArtifact(IResolvable)
//  .ociArtifact(java.util.List<HealthcareFhirServiceOciArtifact>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HealthcareFhirServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.containerRegistryLoginServerUrl">containerRegistryLoginServerUrl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.ociArtifact">ociArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>></code> | oci_artifact block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#authentication HealthcareFhirService#authentication}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.accessPolicyObjectIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}.

---

##### `configurationExportStorageAccountName`<sup>Optional</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.configurationExportStorageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}.

---

##### `containerRegistryLoginServerUrl`<sup>Optional</sup> <a name="containerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.containerRegistryLoginServerUrl"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#cors HealthcareFhirService#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#identity HealthcareFhirService#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}.

---

##### `ociArtifact`<sup>Optional</sup> <a name="ociArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.ociArtifact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>>

oci_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#oci_artifact HealthcareFhirService#oci_artifact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#timeouts HealthcareFhirService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact">putOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds">resetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName">resetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl">resetContainerRegistryLoginServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact">resetOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication"></a>

```java
public void putAuthentication(HealthcareFhirServiceAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors"></a>

```java
public void putCors(HealthcareFhirServiceCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity"></a>

```java
public void putIdentity(HealthcareFhirServiceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `putOciArtifact` <a name="putOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact"></a>

```java
public void putOciArtifact(IResolvable OR java.util.List<HealthcareFhirServiceOciArtifact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts"></a>

```java
public void putTimeouts(HealthcareFhirServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `resetAccessPolicyObjectIds` <a name="resetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds"></a>

```java
public void resetAccessPolicyObjectIds()
```

##### `resetConfigurationExportStorageAccountName` <a name="resetConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName"></a>

```java
public void resetConfigurationExportStorageAccountName()
```

##### `resetContainerRegistryLoginServerUrl` <a name="resetContainerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl"></a>

```java
public void resetContainerRegistryLoginServerUrl()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors"></a>

```java
public void resetCors()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind"></a>

```java
public void resetKind()
```

##### `resetOciArtifact` <a name="resetOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact"></a>

```java
public void resetOciArtifact()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirService;

HealthcareFhirService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirService;

HealthcareFhirService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirService;

HealthcareFhirService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirService;

HealthcareFhirService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthcareFhirService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthcareFhirService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthcareFhirService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareFhirService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact">ociArtifact</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput">accessPolicyObjectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput">configurationExportStorageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput">containerRegistryLoginServerUrlInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput">ociArtifactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl">containerRegistryLoginServerUrl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication"></a>

```java
public HealthcareFhirServiceAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors"></a>

```java
public HealthcareFhirServiceCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity"></a>

```java
public HealthcareFhirServiceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a>

---

##### `ociArtifact`<sup>Required</sup> <a name="ociArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact"></a>

```java
public HealthcareFhirServiceOciArtifactList getOciArtifact();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a>

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled"></a>

```java
public IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts"></a>

```java
public HealthcareFhirServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a>

---

##### `accessPolicyObjectIdsInput`<sup>Optional</sup> <a name="accessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput"></a>

```java
public HealthcareFhirServiceAuthentication getAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `configurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="configurationExportStorageAccountNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput"></a>

```java
public java.lang.String getConfigurationExportStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `containerRegistryLoginServerUrlInput`<sup>Optional</sup> <a name="containerRegistryLoginServerUrlInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput"></a>

```java
public java.util.List<java.lang.String> getContainerRegistryLoginServerUrlInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput"></a>

```java
public HealthcareFhirServiceCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput"></a>

```java
public HealthcareFhirServiceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ociArtifactInput`<sup>Optional</sup> <a name="ociArtifactInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput"></a>

```java
public java.lang.Object getOciArtifactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyObjectIds`<sup>Required</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configurationExportStorageAccountName`<sup>Required</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName"></a>

```java
public java.lang.String getConfigurationExportStorageAccountName();
```

- *Type:* java.lang.String

---

##### `containerRegistryLoginServerUrl`<sup>Required</sup> <a name="containerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl"></a>

```java
public java.util.List<java.lang.String> getContainerRegistryLoginServerUrl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirServiceAuthentication <a name="HealthcareFhirServiceAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceAuthentication;

HealthcareFhirServiceAuthentication.builder()
    .audience(java.lang.String)
    .authority(java.lang.String)
//  .smartProxyEnabled(java.lang.Boolean)
//  .smartProxyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority">authority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}.

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}.

---

##### `smartProxyEnabled`<sup>Optional</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled"></a>

```java
public java.lang.Object getSmartProxyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}.

---

### HealthcareFhirServiceConfig <a name="HealthcareFhirServiceConfig" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceConfig;

HealthcareFhirServiceConfig.builder()
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
    .authentication(HealthcareFhirServiceAuthentication)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceId(java.lang.String)
//  .accessPolicyObjectIds(java.util.List<java.lang.String>)
//  .configurationExportStorageAccountName(java.lang.String)
//  .containerRegistryLoginServerUrl(java.util.List<java.lang.String>)
//  .cors(HealthcareFhirServiceCors)
//  .id(java.lang.String)
//  .identity(HealthcareFhirServiceIdentity)
//  .kind(java.lang.String)
//  .ociArtifact(IResolvable)
//  .ociArtifact(java.util.List<HealthcareFhirServiceOciArtifact>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HealthcareFhirServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl">containerRegistryLoginServerUrl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact">ociArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>></code> | oci_artifact block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication"></a>

```java
public HealthcareFhirServiceAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#authentication HealthcareFhirService#authentication}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds"></a>

```java
public java.util.List<java.lang.String> getAccessPolicyObjectIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}.

---

##### `configurationExportStorageAccountName`<sup>Optional</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName"></a>

```java
public java.lang.String getConfigurationExportStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}.

---

##### `containerRegistryLoginServerUrl`<sup>Optional</sup> <a name="containerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl"></a>

```java
public java.util.List<java.lang.String> getContainerRegistryLoginServerUrl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors"></a>

```java
public HealthcareFhirServiceCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#cors HealthcareFhirService#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity"></a>

```java
public HealthcareFhirServiceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#identity HealthcareFhirService#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}.

---

##### `ociArtifact`<sup>Optional</sup> <a name="ociArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact"></a>

```java
public java.lang.Object getOciArtifact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>>

oci_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#oci_artifact HealthcareFhirService#oci_artifact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts"></a>

```java
public HealthcareFhirServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#timeouts HealthcareFhirService#timeouts}

---

### HealthcareFhirServiceCors <a name="HealthcareFhirServiceCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceCors;

HealthcareFhirServiceCors.builder()
    .allowedHeaders(java.util.List<java.lang.String>)
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
//  .credentialsAllowed(java.lang.Boolean)
//  .credentialsAllowed(IResolvable)
//  .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed">credentialsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}.

---

##### `credentialsAllowed`<sup>Optional</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed"></a>

```java
public java.lang.Object getCredentialsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}.

---

### HealthcareFhirServiceIdentity <a name="HealthcareFhirServiceIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceIdentity;

HealthcareFhirServiceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}.

---

### HealthcareFhirServiceOciArtifact <a name="HealthcareFhirServiceOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceOciArtifact;

HealthcareFhirServiceOciArtifact.builder()
    .loginServer(java.lang.String)
//  .digest(java.lang.String)
//  .imageName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer">loginServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest">digest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}. |

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer"></a>

```java
public java.lang.String getLoginServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}.

---

### HealthcareFhirServiceTimeouts <a name="HealthcareFhirServiceTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceTimeouts;

HealthcareFhirServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirServiceAuthenticationOutputReference <a name="HealthcareFhirServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceAuthenticationOutputReference;

new HealthcareFhirServiceAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled">resetSmartProxyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSmartProxyEnabled` <a name="resetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled"></a>

```java
public void resetSmartProxyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput">smartProxyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `smartProxyEnabledInput`<sup>Optional</sup> <a name="smartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput"></a>

```java
public java.lang.Object getSmartProxyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `smartProxyEnabled`<sup>Required</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled"></a>

```java
public java.lang.Object getSmartProxyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue"></a>

```java
public HealthcareFhirServiceAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---


### HealthcareFhirServiceCorsOutputReference <a name="HealthcareFhirServiceCorsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceCorsOutputReference;

new HealthcareFhirServiceCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed">resetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialsAllowed` <a name="resetCredentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed"></a>

```java
public void resetCredentialsAllowed()
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds"></a>

```java
public void resetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput">credentialsAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed">credentialsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialsAllowedInput`<sup>Optional</sup> <a name="credentialsAllowedInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput"></a>

```java
public java.lang.Object getCredentialsAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialsAllowed`<sup>Required</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed"></a>

```java
public java.lang.Object getCredentialsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue"></a>

```java
public HealthcareFhirServiceCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---


### HealthcareFhirServiceIdentityOutputReference <a name="HealthcareFhirServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceIdentityOutputReference;

new HealthcareFhirServiceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue"></a>

```java
public HealthcareFhirServiceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---


### HealthcareFhirServiceOciArtifactList <a name="HealthcareFhirServiceOciArtifactList" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceOciArtifactList;

new HealthcareFhirServiceOciArtifactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get"></a>

```java
public HealthcareFhirServiceOciArtifactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>>

---


### HealthcareFhirServiceOciArtifactOutputReference <a name="HealthcareFhirServiceOciArtifactOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceOciArtifactOutputReference;

new HealthcareFhirServiceOciArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest"></a>

```java
public void resetDigest()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName"></a>

```java
public void resetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput">digestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput">loginServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer">loginServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput"></a>

```java
public java.lang.String getDigestInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `loginServerInput`<sup>Optional</sup> <a name="loginServerInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput"></a>

```java
public java.lang.String getLoginServerInput();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer"></a>

```java
public java.lang.String getLoginServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>

---


### HealthcareFhirServiceTimeoutsOutputReference <a name="HealthcareFhirServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.healthcare_fhir_service.HealthcareFhirServiceTimeoutsOutputReference;

new HealthcareFhirServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---



