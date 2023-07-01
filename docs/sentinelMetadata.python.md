# `azurerm_sentinel_metadata`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_metadata`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata).

# `sentinelMetadata` Submodule <a name="`sentinelMetadata` Submodule" id="@cdktf/provider-azurerm.sentinelMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelMetadata <a name="SentinelMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadata(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_id: str,
  kind: str,
  name: str,
  parent_id: str,
  workspace_id: str,
  author: SentinelMetadataAuthor = None,
  category: SentinelMetadataCategory = None,
  content_schema_version: str = None,
  custom_version: str = None,
  dependency: str = None,
  first_publish_date: str = None,
  icon_id: str = None,
  id: str = None,
  last_publish_date: str = None,
  preview_images: typing.List[str] = None,
  preview_images_dark: typing.List[str] = None,
  providers: typing.List[str] = None,
  source: SentinelMetadataSource = None,
  support: SentinelMetadataSupport = None,
  threat_analysis_tactics: typing.List[str] = None,
  threat_analysis_techniques: typing.List[str] = None,
  timeouts: SentinelMetadataTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.contentId">content_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.author">author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | author block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.contentSchemaVersion">content_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.customVersion">custom_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.dependency">dependency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.firstPublishDate">first_publish_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.iconId">icon_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.lastPublishDate">last_publish_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.previewImages">preview_images</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.previewImagesDark">preview_images_dark</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.providers">providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.threatAnalysisTactics">threat_analysis_tactics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.threatAnalysisTechniques">threat_analysis_techniques</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.contentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}.

---

##### `author`<sup>Optional</sup> <a name="author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.author"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

author block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.category"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}

---

##### `content_schema_version`<sup>Optional</sup> <a name="content_schema_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.contentSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}.

---

##### `custom_version`<sup>Optional</sup> <a name="custom_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.customVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}.

---

##### `dependency`<sup>Optional</sup> <a name="dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.dependency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}.

---

##### `first_publish_date`<sup>Optional</sup> <a name="first_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.firstPublishDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}.

---

##### `icon_id`<sup>Optional</sup> <a name="icon_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.iconId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_publish_date`<sup>Optional</sup> <a name="last_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.lastPublishDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}.

---

##### `preview_images`<sup>Optional</sup> <a name="preview_images" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.previewImages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}.

---

##### `preview_images_dark`<sup>Optional</sup> <a name="preview_images_dark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.previewImagesDark"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}.

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.providers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.support"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}

---

##### `threat_analysis_tactics`<sup>Optional</sup> <a name="threat_analysis_tactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.threatAnalysisTactics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}.

---

##### `threat_analysis_techniques`<sup>Optional</sup> <a name="threat_analysis_techniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.threatAnalysisTechniques"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor">put_author</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory">put_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport">put_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor">reset_author</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion">reset_content_schema_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion">reset_custom_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency">reset_dependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate">reset_first_publish_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId">reset_icon_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate">reset_last_publish_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages">reset_preview_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark">reset_preview_images_dark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders">reset_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport">reset_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics">reset_threat_analysis_tactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques">reset_threat_analysis_techniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_author` <a name="put_author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor"></a>

```python
def put_author(
  email: str = None,
  link: str = None,
  name: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `put_category` <a name="put_category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory"></a>

```python
def put_category(
  domains: typing.List[str] = None,
  verticals: typing.List[str] = None
) -> None
```

###### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory.parameter.domains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}.

---

###### `verticals`<sup>Optional</sup> <a name="verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory.parameter.verticals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource"></a>

```python
def put_source(
  kind: str,
  id: str = None,
  name: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `put_support` <a name="put_support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport"></a>

```python
def put_support(
  tier: str,
  email: str = None,
  link: str = None,
  name: str = None
) -> None
```

###### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}.

---

##### `reset_author` <a name="reset_author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor"></a>

```python
def reset_author() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_content_schema_version` <a name="reset_content_schema_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion"></a>

```python
def reset_content_schema_version() -> None
```

##### `reset_custom_version` <a name="reset_custom_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion"></a>

```python
def reset_custom_version() -> None
```

##### `reset_dependency` <a name="reset_dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency"></a>

```python
def reset_dependency() -> None
```

##### `reset_first_publish_date` <a name="reset_first_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate"></a>

```python
def reset_first_publish_date() -> None
```

##### `reset_icon_id` <a name="reset_icon_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId"></a>

```python
def reset_icon_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_publish_date` <a name="reset_last_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate"></a>

```python
def reset_last_publish_date() -> None
```

##### `reset_preview_images` <a name="reset_preview_images" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages"></a>

```python
def reset_preview_images() -> None
```

##### `reset_preview_images_dark` <a name="reset_preview_images_dark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark"></a>

```python
def reset_preview_images_dark() -> None
```

##### `reset_providers` <a name="reset_providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders"></a>

```python
def reset_providers() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_support` <a name="reset_support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport"></a>

```python
def reset_support() -> None
```

##### `reset_threat_analysis_tactics` <a name="reset_threat_analysis_tactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics"></a>

```python
def reset_threat_analysis_tactics() -> None
```

##### `reset_threat_analysis_techniques` <a name="reset_threat_analysis_techniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques"></a>

```python
def reset_threat_analysis_techniques() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadata.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadata.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadata.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author">author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput">author_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput">category_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput">content_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput">content_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput">custom_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput">first_publish_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput">icon_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput">last_publish_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput">preview_images_dark_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput">preview_images_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput">providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput">support_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput">threat_analysis_tactics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput">threat_analysis_techniques_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId">content_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion">content_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion">custom_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate">first_publish_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId">icon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate">last_publish_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages">preview_images</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark">preview_images_dark</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers">providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics">threat_analysis_tactics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques">threat_analysis_techniques</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author"></a>

```python
author: SentinelMetadataAuthorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category"></a>

```python
category: SentinelMetadataCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source"></a>

```python
source: SentinelMetadataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a>

---

##### `support`<sup>Required</sup> <a name="support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support"></a>

```python
support: SentinelMetadataSupportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts"></a>

```python
timeouts: SentinelMetadataTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a>

---

##### `author_input`<sup>Optional</sup> <a name="author_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput"></a>

```python
author_input: SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput"></a>

```python
category_input: SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `content_id_input`<sup>Optional</sup> <a name="content_id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput"></a>

```python
content_id_input: str
```

- *Type:* str

---

##### `content_schema_version_input`<sup>Optional</sup> <a name="content_schema_version_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput"></a>

```python
content_schema_version_input: str
```

- *Type:* str

---

##### `custom_version_input`<sup>Optional</sup> <a name="custom_version_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput"></a>

```python
custom_version_input: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `first_publish_date_input`<sup>Optional</sup> <a name="first_publish_date_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput"></a>

```python
first_publish_date_input: str
```

- *Type:* str

---

##### `icon_id_input`<sup>Optional</sup> <a name="icon_id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput"></a>

```python
icon_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `last_publish_date_input`<sup>Optional</sup> <a name="last_publish_date_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput"></a>

```python
last_publish_date_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `preview_images_dark_input`<sup>Optional</sup> <a name="preview_images_dark_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput"></a>

```python
preview_images_dark_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_images_input`<sup>Optional</sup> <a name="preview_images_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput"></a>

```python
preview_images_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `providers_input`<sup>Optional</sup> <a name="providers_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput"></a>

```python
providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput"></a>

```python
source_input: SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `support_input`<sup>Optional</sup> <a name="support_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput"></a>

```python
support_input: SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `threat_analysis_tactics_input`<sup>Optional</sup> <a name="threat_analysis_tactics_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput"></a>

```python
threat_analysis_tactics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threat_analysis_techniques_input`<sup>Optional</sup> <a name="threat_analysis_techniques_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput"></a>

```python
threat_analysis_techniques_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelMetadataTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId"></a>

```python
content_id: str
```

- *Type:* str

---

##### `content_schema_version`<sup>Required</sup> <a name="content_schema_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion"></a>

```python
content_schema_version: str
```

- *Type:* str

---

##### `custom_version`<sup>Required</sup> <a name="custom_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion"></a>

```python
custom_version: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `first_publish_date`<sup>Required</sup> <a name="first_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate"></a>

```python
first_publish_date: str
```

- *Type:* str

---

##### `icon_id`<sup>Required</sup> <a name="icon_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId"></a>

```python
icon_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `last_publish_date`<sup>Required</sup> <a name="last_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate"></a>

```python
last_publish_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `preview_images`<sup>Required</sup> <a name="preview_images" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages"></a>

```python
preview_images: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview_images_dark`<sup>Required</sup> <a name="preview_images_dark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark"></a>

```python
preview_images_dark: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers"></a>

```python
providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threat_analysis_tactics`<sup>Required</sup> <a name="threat_analysis_tactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics"></a>

```python
threat_analysis_tactics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threat_analysis_techniques`<sup>Required</sup> <a name="threat_analysis_techniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques"></a>

```python
threat_analysis_techniques: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelMetadataAuthor <a name="SentinelMetadataAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataAuthor(
  email: str = None,
  link: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataCategory <a name="SentinelMetadataCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataCategory(
  domains: typing.List[str] = None,
  verticals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains">domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals">verticals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}.

---

##### `verticals`<sup>Optional</sup> <a name="verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals"></a>

```python
verticals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}.

---

### SentinelMetadataConfig <a name="SentinelMetadataConfig" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_id: str,
  kind: str,
  name: str,
  parent_id: str,
  workspace_id: str,
  author: SentinelMetadataAuthor = None,
  category: SentinelMetadataCategory = None,
  content_schema_version: str = None,
  custom_version: str = None,
  dependency: str = None,
  first_publish_date: str = None,
  icon_id: str = None,
  id: str = None,
  last_publish_date: str = None,
  preview_images: typing.List[str] = None,
  preview_images_dark: typing.List[str] = None,
  providers: typing.List[str] = None,
  source: SentinelMetadataSource = None,
  support: SentinelMetadataSupport = None,
  threat_analysis_tactics: typing.List[str] = None,
  threat_analysis_techniques: typing.List[str] = None,
  timeouts: SentinelMetadataTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId">content_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author">author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | author block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion">content_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion">custom_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency">dependency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate">first_publish_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId">icon_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate">last_publish_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages">preview_images</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark">preview_images_dark</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers">providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics">threat_analysis_tactics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques">threat_analysis_techniques</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId"></a>

```python
content_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}.

---

##### `author`<sup>Optional</sup> <a name="author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author"></a>

```python
author: SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

author block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category"></a>

```python
category: SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}

---

##### `content_schema_version`<sup>Optional</sup> <a name="content_schema_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion"></a>

```python
content_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}.

---

##### `custom_version`<sup>Optional</sup> <a name="custom_version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion"></a>

```python
custom_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}.

---

##### `dependency`<sup>Optional</sup> <a name="dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}.

---

##### `first_publish_date`<sup>Optional</sup> <a name="first_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate"></a>

```python
first_publish_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}.

---

##### `icon_id`<sup>Optional</sup> <a name="icon_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId"></a>

```python
icon_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_publish_date`<sup>Optional</sup> <a name="last_publish_date" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate"></a>

```python
last_publish_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}.

---

##### `preview_images`<sup>Optional</sup> <a name="preview_images" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages"></a>

```python
preview_images: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}.

---

##### `preview_images_dark`<sup>Optional</sup> <a name="preview_images_dark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark"></a>

```python
preview_images_dark: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}.

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers"></a>

```python
providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source"></a>

```python
source: SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support"></a>

```python
support: SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}

---

##### `threat_analysis_tactics`<sup>Optional</sup> <a name="threat_analysis_tactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics"></a>

```python
threat_analysis_tactics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}.

---

##### `threat_analysis_techniques`<sup>Optional</sup> <a name="threat_analysis_techniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques"></a>

```python
threat_analysis_techniques: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts"></a>

```python
timeouts: SentinelMetadataTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}.

---

### SentinelMetadataSource <a name="SentinelMetadataSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataSource(
  kind: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataSupport <a name="SentinelMetadataSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataSupport(
  tier: str,
  email: str = None,
  link: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataTimeouts <a name="SentinelMetadataTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelMetadataAuthorOutputReference <a name="SentinelMetadataAuthorOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataAuthorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue"></a>

```python
internal_value: SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---


### SentinelMetadataCategoryOutputReference <a name="SentinelMetadataCategoryOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals">reset_verticals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domains` <a name="reset_domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_verticals` <a name="reset_verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals"></a>

```python
def reset_verticals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput">verticals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals">verticals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verticals_input`<sup>Optional</sup> <a name="verticals_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput"></a>

```python
verticals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verticals`<sup>Required</sup> <a name="verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals"></a>

```python
verticals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue"></a>

```python
internal_value: SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---


### SentinelMetadataSourceOutputReference <a name="SentinelMetadataSourceOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue"></a>

```python
internal_value: SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---


### SentinelMetadataSupportOutputReference <a name="SentinelMetadataSupportOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataSupportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue"></a>

```python
internal_value: SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---


### SentinelMetadataTimeoutsOutputReference <a name="SentinelMetadataTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_metadata

sentinelMetadata.SentinelMetadataTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelMetadataTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>]

---



