# `azurerm_spring_cloud_app_mysql_association`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_app_mysql_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association).

# `springCloudAppMysqlAssociation` Submodule <a name="`springCloudAppMysqlAssociation` Submodule" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppMysqlAssociation <a name="SpringCloudAppMysqlAssociation" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association azurerm_spring_cloud_app_mysql_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

new springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation(scope: Construct, id: string, config: SpringCloudAppMysqlAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig">SpringCloudAppMysqlAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig">SpringCloudAppMysqlAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudAppMysqlAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference">SpringCloudAppMysqlAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerIdInput">mysqlServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppIdInput">springCloudAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerId">mysqlServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudAppMysqlAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference">SpringCloudAppMysqlAssociationTimeoutsOutputReference</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mysqlServerIdInput`<sup>Optional</sup> <a name="mysqlServerIdInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerIdInput"></a>

```typescript
public readonly mysqlServerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `springCloudAppIdInput`<sup>Optional</sup> <a name="springCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppIdInput"></a>

```typescript
public readonly springCloudAppIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudAppMysqlAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mysqlServerId`<sup>Required</sup> <a name="mysqlServerId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerId"></a>

```typescript
public readonly mysqlServerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppMysqlAssociationConfig <a name="SpringCloudAppMysqlAssociationConfig" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.Initializer"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

const springCloudAppMysqlAssociationConfig: springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#database_name SpringCloudAppMysqlAssociation#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.mysqlServerId">mysqlServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#mysql_server_id SpringCloudAppMysqlAssociation#mysql_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#name SpringCloudAppMysqlAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#password SpringCloudAppMysqlAssociation#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#spring_cloud_app_id SpringCloudAppMysqlAssociation#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#username SpringCloudAppMysqlAssociation#username}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#id SpringCloudAppMysqlAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#database_name SpringCloudAppMysqlAssociation#database_name}.

---

##### `mysqlServerId`<sup>Required</sup> <a name="mysqlServerId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.mysqlServerId"></a>

```typescript
public readonly mysqlServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#mysql_server_id SpringCloudAppMysqlAssociation#mysql_server_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#name SpringCloudAppMysqlAssociation#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#password SpringCloudAppMysqlAssociation#password}.

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#spring_cloud_app_id SpringCloudAppMysqlAssociation#spring_cloud_app_id}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#username SpringCloudAppMysqlAssociation#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#id SpringCloudAppMysqlAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudAppMysqlAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#timeouts SpringCloudAppMysqlAssociation#timeouts}

---

### SpringCloudAppMysqlAssociationTimeouts <a name="SpringCloudAppMysqlAssociationTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.Initializer"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

const springCloudAppMysqlAssociationTimeouts: springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#create SpringCloudAppMysqlAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#delete SpringCloudAppMysqlAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#read SpringCloudAppMysqlAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#update SpringCloudAppMysqlAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#create SpringCloudAppMysqlAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#delete SpringCloudAppMysqlAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#read SpringCloudAppMysqlAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/spring_cloud_app_mysql_association#update SpringCloudAppMysqlAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppMysqlAssociationTimeoutsOutputReference <a name="SpringCloudAppMysqlAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudAppMysqlAssociation } from '@cdktf/provider-azurerm'

new springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudAppMysqlAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

---



