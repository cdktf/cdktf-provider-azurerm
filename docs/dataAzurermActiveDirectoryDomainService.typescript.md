# `data_azurerm_active_directory_domain_service`

Refer to the Terraform Registory for docs: [`data_azurerm_active_directory_domain_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service).

# `dataAzurermActiveDirectoryDomainService` Submodule <a name="`dataAzurermActiveDirectoryDomainService` Submodule" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermActiveDirectoryDomainService <a name="DataAzurermActiveDirectoryDomainService" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService(scope: Construct, id: string, config: DataAzurermActiveDirectoryDomainServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermActiveDirectoryDomainServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType">domainConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled">filteredSyncEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets">replicaSets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap">secureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner">syncOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `domainConfigurationType`<sup>Required</sup> <a name="domainConfigurationType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType"></a>

```typescript
public readonly domainConfigurationType: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `filteredSyncEnabled`<sup>Required</sup> <a name="filteredSyncEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```typescript
public readonly filteredSyncEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications"></a>

```typescript
public readonly notifications: DataAzurermActiveDirectoryDomainServiceNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a>

---

##### `replicaSets`<sup>Required</sup> <a name="replicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets"></a>

```typescript
public readonly replicaSets: DataAzurermActiveDirectoryDomainServiceReplicaSetsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `secureLdap`<sup>Required</sup> <a name="secureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap"></a>

```typescript
public readonly secureLdap: DataAzurermActiveDirectoryDomainServiceSecureLdapList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security"></a>

```typescript
public readonly security: DataAzurermActiveDirectoryDomainServiceSecurityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `syncOwner`<sup>Required</sup> <a name="syncOwner" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner"></a>

```typescript
public readonly syncOwner: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermActiveDirectoryDomainServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermActiveDirectoryDomainServiceConfig <a name="DataAzurermActiveDirectoryDomainServiceConfig" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceConfig: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermActiveDirectoryDomainServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#timeouts DataAzurermActiveDirectoryDomainService#timeouts}

---

### DataAzurermActiveDirectoryDomainServiceNotifications <a name="DataAzurermActiveDirectoryDomainServiceNotifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceNotifications: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications = { ... }
```


### DataAzurermActiveDirectoryDomainServiceReplicaSets <a name="DataAzurermActiveDirectoryDomainServiceReplicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceReplicaSets: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets = { ... }
```


### DataAzurermActiveDirectoryDomainServiceSecureLdap <a name="DataAzurermActiveDirectoryDomainServiceSecureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceSecureLdap: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap = { ... }
```


### DataAzurermActiveDirectoryDomainServiceSecurity <a name="DataAzurermActiveDirectoryDomainServiceSecurity" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceSecurity: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity = { ... }
```


### DataAzurermActiveDirectoryDomainServiceTimeouts <a name="DataAzurermActiveDirectoryDomainServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

const dataAzurermActiveDirectoryDomainServiceTimeouts: dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermActiveDirectoryDomainServiceNotificationsList <a name="DataAzurermActiveDirectoryDomainServiceNotificationsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">notifyDcAdmins</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">notifyGlobalAdmins</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `notifyDcAdmins`<sup>Required</sup> <a name="notifyDcAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```typescript
public readonly notifyDcAdmins: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notifyGlobalAdmins`<sup>Required</sup> <a name="notifyGlobalAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```typescript
public readonly notifyGlobalAdmins: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermActiveDirectoryDomainServiceNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a>

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsList <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get"></a>

```typescript
public get(index: number): DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses">domainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress">externalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus">serviceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainControllerIpAddresses`<sup>Required</sup> <a name="domainControllerIpAddresses" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses"></a>

```typescript
public readonly domainControllerIpAddresses: string[];
```

- *Type:* string[]

---

##### `externalAccessIpAddress`<sup>Required</sup> <a name="externalAccessIpAddress" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress"></a>

```typescript
public readonly externalAccessIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus"></a>

```typescript
public readonly serviceStatus: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermActiveDirectoryDomainServiceReplicaSets;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a>

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapList <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get"></a>

```typescript
public get(index: number): DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">certificateExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">certificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateExpiry`<sup>Required</sup> <a name="certificateExpiry" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```typescript
public readonly certificateExpiry: string;
```

- *Type:* string

---

##### `certificateThumbprint`<sup>Required</sup> <a name="certificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```typescript
public readonly certificateThumbprint: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```typescript
public readonly externalAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermActiveDirectoryDomainServiceSecureLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a>

---


### DataAzurermActiveDirectoryDomainServiceSecurityList <a name="DataAzurermActiveDirectoryDomainServiceSecurityList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get"></a>

```typescript
public get(index: number): DataAzurermActiveDirectoryDomainServiceSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceSecurityOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">kerberosArmoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">kerberosRc4EncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">ntlmV1Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">syncKerberosPasswords</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">syncNtlmPasswords</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">syncOnPremPasswords</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">tlsV1Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kerberosArmoringEnabled`<sup>Required</sup> <a name="kerberosArmoringEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```typescript
public readonly kerberosArmoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="kerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```typescript
public readonly kerberosRc4EncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ntlmV1Enabled`<sup>Required</sup> <a name="ntlmV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```typescript
public readonly ntlmV1Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `syncKerberosPasswords`<sup>Required</sup> <a name="syncKerberosPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```typescript
public readonly syncKerberosPasswords: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `syncNtlmPasswords`<sup>Required</sup> <a name="syncNtlmPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```typescript
public readonly syncNtlmPasswords: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `syncOnPremPasswords`<sup>Required</sup> <a name="syncOnPremPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```typescript
public readonly syncOnPremPasswords: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tlsV1Enabled`<sup>Required</sup> <a name="tlsV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```typescript
public readonly tlsV1Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermActiveDirectoryDomainServiceSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a>

---


### DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermActiveDirectoryDomainService } from '@cdktf/provider-azurerm'

new dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermActiveDirectoryDomainServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a> | cdktf.IResolvable

---



