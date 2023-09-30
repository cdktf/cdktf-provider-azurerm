# `azurerm_storage_data_lake_gen2_path`

Refer to the Terraform Registory for docs: [`azurerm_storage_data_lake_gen2_path`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path).

# `storageDataLakeGen2Path` Submodule <a name="`storageDataLakeGen2Path` Submodule" id="@cdktf/provider-azurerm.storageDataLakeGen2Path"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDataLakeGen2Path <a name="StorageDataLakeGen2Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path azurerm_storage_data_lake_gen2_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

new storageDataLakeGen2Path.StorageDataLakeGen2Path(scope: Construct, id: string, config: StorageDataLakeGen2PathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce">putAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce">resetAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAce` <a name="putAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce"></a>

```typescript
public putAce(value: IResolvable | StorageDataLakeGen2PathAce[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageDataLakeGen2PathTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

---

##### `resetAce` <a name="resetAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce"></a>

```typescript
public resetAce(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace">ace</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput">aceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput">filesystemNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName">filesystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ace`<sup>Required</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace"></a>

```typescript
public readonly ace: StorageDataLakeGen2PathAceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts"></a>

```typescript
public readonly timeouts: StorageDataLakeGen2PathTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a>

---

##### `aceInput`<sup>Optional</sup> <a name="aceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput"></a>

```typescript
public readonly aceInput: IResolvable | StorageDataLakeGen2PathAce[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]

---

##### `filesystemNameInput`<sup>Optional</sup> <a name="filesystemNameInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput"></a>

```typescript
public readonly filesystemNameInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageDataLakeGen2PathTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

---

##### `filesystemName`<sup>Required</sup> <a name="filesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName"></a>

```typescript
public readonly filesystemName: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDataLakeGen2PathAce <a name="StorageDataLakeGen2PathAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

const storageDataLakeGen2PathAce: storageDataLakeGen2Path.StorageDataLakeGen2PathAce = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions">permissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}.

---

### StorageDataLakeGen2PathConfig <a name="StorageDataLakeGen2PathConfig" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

const storageDataLakeGen2PathConfig: storageDataLakeGen2Path.StorageDataLakeGen2PathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName">filesystemName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace">ace</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]</code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filesystemName`<sup>Required</sup> <a name="filesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName"></a>

```typescript
public readonly filesystemName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}.

---

##### `ace`<sup>Optional</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace"></a>

```typescript
public readonly ace: IResolvable | StorageDataLakeGen2PathAce[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#ace StorageDataLakeGen2Path#ace}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageDataLakeGen2PathTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#timeouts StorageDataLakeGen2Path#timeouts}

---

### StorageDataLakeGen2PathTimeouts <a name="StorageDataLakeGen2PathTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

const storageDataLakeGen2PathTimeouts: storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDataLakeGen2PathAceList <a name="StorageDataLakeGen2PathAceList" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

new storageDataLakeGen2Path.StorageDataLakeGen2PathAceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get"></a>

```typescript
public get(index: number): StorageDataLakeGen2PathAceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageDataLakeGen2PathAce[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>[]

---


### StorageDataLakeGen2PathAceOutputReference <a name="StorageDataLakeGen2PathAceOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

new storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageDataLakeGen2PathAce;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce">StorageDataLakeGen2PathAce</a>

---


### StorageDataLakeGen2PathTimeoutsOutputReference <a name="StorageDataLakeGen2PathTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageDataLakeGen2Path } from '@cdktf/provider-azurerm'

new storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageDataLakeGen2PathTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

---



